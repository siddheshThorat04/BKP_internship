# 🌟 Basti Ki Pathshala Internship Portal

A full-stack web application for managing internship registrations, profiles, and admin tasks for Basti Ki Pathshala.

---

# 🚀 Features

- Intern registration and login
- Admin dashboard for managing interns
- Individual intern profile pages
- Secure authentication (JWT, cookies)
- Responsive UI with React and Tailwind CSS

---

# 🗂️ Project Structure

```
backend/
  controllers/
  db/
  middleware/
  models/
  routes/
  utils/
  .env
  package.json
  server.js

frontend/
  public/
  src/
    context/
    App.jsx
    Admin.jsx
    Home.jsx
    InternDashboard.jsx
    Login.jsx
    Profile.jsx
    Register.jsx
    ...
  .env
  package.json
  index.html
  tailwind.config.js
  postcss.config.js
```

---

# 🏁 Getting Started

## ⚙️ Prerequisites

- Node.js & npm
- MongoDB (local or cloud)

---

# 🔧 Backend & Frontend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

2. **Example `.env` files:**

   **Backend (`backend/.env`):**
   ```
   MONGO_URL=mongodb://127.0.0.1:27017/bkp
   PORT=5000
   frontend_url=http://localhost:5173
   JWT_SECRET=your_jwt_secret
   ```

   **Frontend (`frontend/.env`):**
   ```
   VITE_BACKEND_URL="http://localhost:5000"
   ```

3. **To run development servers:**
   ```sh
   # Start backend
   cd backend
   npm run server

   # Start frontend
   cd ../frontend
   npm run dev
   ```

---

# 📚 API & Frontend Routes Overview

## 🛠️ Backend API Routes

### 👤 Auth & Intern

- **POST `/api/register`** — Register a new intern
- **POST `/api/login`** — Intern login
- **GET `/api/profile/:id`** — Get intern profile by ID
- **PUT `/api/profile/:id`** — Update intern profile
- **GET `/api/interns`** — Get all interns (admin only)

### 🛡️ Admin

- **POST `/api/admin/login`** — Admin login
- **GET `/api/admin/interns`** — Get all intern profiles
- **GET `/api/admin/intern/:id`** — Get specific intern profile
- **PUT `/api/admin/intern/:id`** — Update intern profile
- **DELETE `/api/admin/intern/:id`** — Delete intern profile

## 🌐 Frontend Routes (React Router)

- `/` — Home page
- `/register` — Intern registration
- `/login` — Intern login
- `/admin` — Admin dashboard
- `/intern` — Intern dashboard
- `/profile/:id` — Intern profile page

---

> **Note:**  
> - Some routes require authentication (JWT token).  
> - Admin routes are protected and accessible only to users with