import "dotenv/config";
import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const parsedPort = Number.parseInt(process.env.PORT || "5001", 10);
const preferredPort = Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 5001;
const maxPortAttempts = 10;
let database;
const memoryStore = {
  contacts: [],
  reservations: []
};

let mongoReady = false;

async function connectDatabase() {
  if (!process.env.MONGODB_URI) return;

  try {
    const { MongoClient } = await import("mongodb");
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    database = client.db();
    mongoReady = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.warn(
      "MongoDB unavailable, using in-memory fallback:",
      error.message
    );
  }
}

function required(value) {
  return typeof value === "string" && value.trim().length > 0;
}

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    database: mongoReady ? "mongodb" : "memory"
  });
});

app.post("/api/contact", async (request, response, next) => {
  try {
    const payload = request.body || {};
    if (!required(payload.name) || !required(payload.email) || !required(payload.message)) {
      return response.status(400).json({
        ok: false,
        message: "Name, email, and message are required."
      });
    }

    if (mongoReady) {
      await database.collection("contact_messages").insertOne({
        ...payload,
        createdAt: new Date()
      });
    } else {
      memoryStore.contacts.push({ ...payload, createdAt: new Date().toISOString() });
    }

    response.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/api/reservations", async (request, response, next) => {
  try {
    const payload = request.body || {};
    if (!required(payload.pickup) || !required(payload.dropoff) || !required(payload.phone)) {
      return response.status(400).json({
        ok: false,
        message: "Pickup, dropoff, and phone are required."
      });
    }

    if (mongoReady) {
      await database.collection("reservation_requests").insertOne({
        ...payload,
        createdAt: new Date()
      });
    } else {
      memoryStore.reservations.push({ ...payload, createdAt: new Date().toISOString() });
    }

    response.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/submissions", (_request, response) => {
  response.json(memoryStore);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, "../../client/dist");

app.use(express.static(clientDist));
app.get("*", (_request, response) => {
  response.sendFile(path.join(clientDist, "index.html"));
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({
    ok: false,
    message: "Something went wrong."
  });
});

function startServer(port, attempt = 0) {
  const server = createServer(app);

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && attempt < maxPortAttempts) {
      const nextPort = port + 1;
      console.warn(`Port ${port} is already in use. Trying ${nextPort}...`);
      startServer(nextPort, attempt + 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`BlinkRide API listening on http://localhost:${port}`);
  });
}

connectDatabase().then(() => {
  startServer(preferredPort);
});
