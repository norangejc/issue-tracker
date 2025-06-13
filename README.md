# Issue Tracker

A modern, full-stack issue tracking application built with **Next.js 15**, **Prisma**, **MySQL**, and **Google OAuth**.

## Features

- Create, edit, and delete issues
- Filter and sort issues by status or creation date
- Dashboard with charts (issues by status)
- Google OAuth authentication
- Server-side filtering via URL query params
- Responsive UI with Radix UI and TailwindCSS

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: TailwindCSS, Radix UI
- **Backend**: Prisma ORM, MySQL
- **Auth**: NextAuth.js (Google OAuth)
- **Other**: ESLint, React Query, React Hook Form, React Hot Toast

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/norangejc/issue-tracker.git
cd issue-tracker
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file based on the `.env.example`:

```bash
cp .env.example .env
```

Then fill in the required values (e.g., database URL, Google OAuth credentials).

### 4. Set up the database

Make sure MySQL is running locally or accessible via your `DATABASE_URL`.

Run the following to set up the database schema:

```bash
npx prisma generate
```

(Optional) Seed the database:

```bash
npx prisma db seed
```

### 5. Start the dev server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

