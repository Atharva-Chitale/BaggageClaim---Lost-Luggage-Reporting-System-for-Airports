
# BaggageClaim - Lost Luggage Reporting System for Airports

BaggageClaim is a web-based system for airports that allows users to report missing luggage. The system provides a user-friendly interface for passengers to raise claims and enables airport staff (admins) to manage and resolve them efficiently.

## ✈️ Features

- ✍️ User Signup & Login (with JWT authentication)
- 🧳 Raise a missing luggage claim
- 🔐 Role-based access (User/Admin)
- 📋 Admin dashboard to view and manage all claims
- 🛠️ Built with Node.js, Express.js, and MongoDB

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: Express Middleware for auth and role checks

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/BaggageClaim.git
   cd BaggageClaim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the app**
   ```bash
   npm start
   ```

## 📂 Project Structure

```
BaggageClaim/
├── controllers/
├── middleware/
├── models/
├── routes/
├── index.js
└── .env.example
```
