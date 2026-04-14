# 🏥 Doctor Appointment Booking Web App

A full-stack doctor appointment booking platform built with React, Node.js, and MongoDB. The application supports three user roles — **Patients**, **Doctors**, and **Admins** — each with a dedicated panel and feature set.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## 🧭 Project Overview

This project is a full-featured healthcare appointment management system where:

- **Patients** can browse doctors, book appointments, manage their profile, and pay online.
- **Doctors** can manage their schedule, view appointments, and update their profile.
- **Admins** can manage doctors, oversee all appointments, and monitor key metrics from a dashboard.

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

**Payments**
- Online Payment Gateway Integration

---

## ✨ Features

### 🧑‍💼 Patient
- Browse all available doctors by specialty
- View individual doctor profiles and availability
- Book, view, and cancel appointments
- Manage personal profile
- Pay for appointments online

### 🩺 Doctor
- Dedicated doctor dashboard
- View and manage incoming appointments
- Update profile and availability

### 🔐 Admin
- Secure admin panel
- Add and manage doctors
- View and manage all appointments across the platform
- Analytics dashboard with key metrics

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/doctor-appointment-app.git
cd doctor-appointment-app
```

**2. Install frontend dependencies**
```bash
cd frontend
npm install
npm run dev
```

**3. Install backend dependencies**
```bash
cd backend
npm install
npm start
```

**4. Set up environment variables**

Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYMENT_GATEWAY_KEY=your_payment_key
```

---

## 📁 Project Structure

```
doctor-appointment-app/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── MyAppointments.jsx
│   │   └── App.jsx
│   └── tailwind.config.js
│
├── backend/                # Node.js / Express backend
│   ├── models/             # Mongoose models
│   │   ├── Doctor.js
│   │   └── User.js
│   ├── routes/             # API route handlers
│   ├── middleware/         # Auth & error middleware
│   └── server.js
│
└── admin/                  # Admin panel (React)
    └── src/
        ├── pages/
        │   ├── Dashboard.jsx
        │   ├── DoctorsList.jsx
        │   ├── AddDoctor.jsx
        │   └── Appointments.jsx
        └── App.jsx
```

---

## 📸 Screenshots

> Coming soon

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).