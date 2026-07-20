import { spawn } from "node:child_process";

const commands = [
  ["npm", ["run", "dev", "--workspace", "server"], { PORT: process.env.PORT || "5001" }],
  [
    "npm",
    ["run", "dev", "--workspace", "client"],
    { BLINKRIDE_API_URL: process.env.BLINKRIDE_API_URL || "http://localhost:5001" }
  ]
];

const children = commands.map(([command, args, env]) => {
  const child = spawn(command, args, {
    env: { ...process.env, ...env },
    stdio: "inherit",
    shell: process.platform === "win32"
  });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      process.exitCode = code;
    }
  });

  return child;
});

function stop() {
  for (const child of children) {
    child.kill("SIGTERM");
  }
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
