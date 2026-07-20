# WordPress To MERN Migration Notes

## Source Material

- Original domain: `https://br.theairportlimo.com/`
- WordPress backup used: `br.theairportlimo.com-20260715-093834-424.wpress`
- Screenshot references supplied for home, get app, services, contact, about,
  affiliates, drivers, customers, and fleet pages.

The `.wpress` file used the All-in-One WP Migration archive format. Media files
were selectively extracted from the backup into `client/public/assets` to avoid
copying the full WordPress upload library into the MERN repository.

## Frontend Mapping

The WordPress page structure has been rebuilt as React routes:

| WordPress Page | MERN Route | React Component |
| --- | --- | --- |
| Home | `/` | `HomePage` |
| Get the App | `/get-the-app/` | `GetAppPage` |
| Services | `/services/` | `ServicesPage` |
| Customers | `/customers/` | `CustomersPage` |
| Drivers | `/drivers/` | `DriversPage` |
| Affiliates | `/affiliates/` | `AffiliatesPage` |
| About Us | `/about-us/` | `AboutPage` |
| Fleet | `/fleet/` | `FleetPage` |
| Contact Us | `/contact-us/` | `ContactPage` |

Shared elements include the BlinkRide header, slide-out menu, teal call-to-action
buttons, dark footer, section chips, service cards, split content panels, FAQ
accordion rows, testimonial cards, and dark CTA bands.

The current home page also mirrors the live WordPress hero behavior: a six-slide
autoplay slider, the transparent hero header, and the separate sticky teal header
that appears after scrolling.

## Backend Mapping

The server is intentionally small and focused:

- `POST /api/contact` stores contact form submissions.
- `POST /api/reservations` stores reservation requests.
- `GET /api/health` reports API and database status.
- `GET /api/admin/submissions` exposes the in-memory fallback data during local
  development.

When MongoDB is configured and the official `mongodb` driver is installed,
submissions are saved to MongoDB collections. When MongoDB is not configured,
the server keeps data in memory so demos and local preview still work.

## Asset Notes

The latest live WordPress HTML/CSS was copied into `.source-live` for reference,
including the Elementor page CSS used to identify current hero slides, service
card images, header spacing, footer sizing, and footer hover behavior. The
matching media files are stored in `client/public/assets` and copied into
`client/dist/assets` during `npm run build`.

## Next Production Steps

- Replace placeholder office address, phone, and support email with the live
  BlinkRide business details.
- Connect app-store links to the real customer and driver app listings.
- Add authentication before exposing any production admin submission endpoint.
- Add SMTP or CRM delivery for contact and reservation leads if MongoDB storage
  is not enough for operations.
