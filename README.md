# 🩺 ConsultX – Doctors Appointment Platform

A modern, full-stack platform for booking, managing, and monetizing doctor appointments. Built with Next.js, Clerk authentication, and a robust credit-based system for patients and doctors.

---

## 🚀 Features

- **User Roles:** Patient, Doctor, Admin, Unassigned (Onboarding)
- **Authentication:** Secure sign-in/sign-up with Clerk
- **Credit System:** Patients purchase credits to book appointments; doctors earn credits for completed appointments
- **Subscription Plans:** Free, Standard, Premium (powered by Clerk Billing)
- **Payouts:** Doctors can request payouts via PayPal
- **Admin Dashboard:** Manage users, credits, and payouts
- **Responsive UI:** Stylish, mobile-friendly design with modern UI components
- **Notifications:** Real-time feedback for actions and errors

---

## 🛠️ Tech Stack

- **Frontend:** Next.js , Tailwind CSS , ShadcnUI
- **Backend:** Next.js API routes, Prisma ORM
- **Auth & Billing:** Clerk
- **Database:** PostgreSQL (or your preferred DB)
- **Payments:** Clerk Commerce, PayPal (for doctor payouts)
- **Icons & UI:** Lucide, Shadcn/UI

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Apothecary.git
cd Apothecary
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Clerk, database, and PayPal credentials.

```bash
cp .env.example .env.local
```

### 4. Set Up the Database

```bash
npx prisma migrate dev
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧑‍💻 Project Structure

```
/components      # Reusable React components (UI, Header, Pricing, etc.)
/actions         # Server actions for credits, payouts, etc.
/pages or /app   # Next.js pages or app router
/prisma          # Prisma schema and migrations
/public          # Static assets (logo, images)
/styles          # Tailwind and global styles
```

---

## ✨ Screenshots

> _Add screenshots or GIFs here to showcase the UI!_ > ![Home Page](/public/ss1.jpeg)

---

## 📝 Customization

- **Plans & Pricing:** Edit plans in Clerk dashboard and update `PLAN_CREDITS` in `/actions/credits.js`
- **UI Theme:** Customize Tailwind config and component styles
- **Payout Logic:** Adjust payout calculations in `/actions/payout.js`

---

## 📬 Contact

Questions? Suggestions?  
Open an issue or reach out at [gamerhmv2050@gmail.com](mailto:gamerhmv2050@gmail.com).

---
