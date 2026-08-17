# Bricx.ai — Commercial Real Estate Advisory

This project has been converted from a Python Flask application into a modern **Next.js App Router** application. It serves as the primary digital platform for Bricx.ai, providing commercial real estate leasing advisory, income investments, and land acquisition advisory services in Bengaluru.

## Tech Stack

* **Frontend Framework**: Next.js (App Router, React 19)
* **Styling**: Custom modern CSS (embedded into `app/globals.css` and component modules) with Google Fonts integrations.
* **Email Notifications & Form Handling**: Nodemailer (SMTP transport) with structured email triggers for consultation requests, floating briefs, newsletter subscriptions, and NDAs.
* **Search Engine Optimization (SEO)**: Next.js metadata objects (titles, descriptions, alternates, Open Graph, Twitter cards, and structured JSON-LD schemas matching templates exactly).

## Getting Started

### 1. Configure Environment Variables

Create a `.env` file in the root directory and configure the following parameters:

```env
# SMTP Credentials (Nodemailer)
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-user@domain.com
SMTP_PASS=your-secure-password
CONTACT_RECEIVER_EMAIL=principal@bricx.ai
```

### 2. Run the Development Server

Install dependencies and start the local environment:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production

Compile and verify TypeScript checks, lint checks, and static page exports:

```bash
npm run build
npm run start
```
