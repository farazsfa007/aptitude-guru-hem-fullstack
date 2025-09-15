# 📚 LMS Micro-Certification Portal

A full-stack **Learning Management System (LMS) Micro-Certification Portal** built with **React, Node.js (Express), and MongoDB**.  
Users can register/login, attempt quizzes, view results, and download auto-generated PDF certificates upon passing.

---

## 🚀 Features

- **User Authentication** (Register/Login with JWT + bcrypt)
- **Protected Routes** (Frontend & Backend)
- **Quiz Module**
  - Fetch questions from MongoDB
  - Answer MCQs one by one with navigation (Prev/Next)
  - Submit answers and calculate score on the server
- **Results**
  - Show score, total, and pass/fail status
  - Save results in MongoDB
- **Certificate**
  - Generate personalized PDF certificate using `pdfkit`
  - Download certificate directly
- **UI**
  - Built with React + Tailwind CSS
  - Navbar with user info & logout

---

## 🛠 Tech Stack

**Frontend**
- React 18
- React Router DOM 6
- Axios
- Tailwind CSS (utility-first styling)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication (`jsonwebtoken`)
- Password Hashing (`bcryptjs`)
- PDF Generation (`pdfkit`)
- CORS + dotenv

---

## 📂 Project Structure

backend/
server.js
config/db.js
models/
User.js
Question.js
Result.js
routes/
auth.js
quiz.js
cert.js
utils/authMiddleware.js
seed/seed.js
.env

frontend/
src/
api.js
utils/auth.js
components/
Navbar.jsx
QuestionCard.jsx
pages/
Login.jsx
Register.jsx
QuizPage.jsx
ResultPage.jsx
App.js
main.jsx
.env



---

## ⚙️ Setup Instructions

### 1. Clone Repository
```sh
git clone <your-repo-url>
cd <your-repo-folder>


###  2. Backend Setup

Deployment

Frontend → Vercel

Backend → Vercel

Database → MongoDB Atlas


cd backend
npm install

Seed database with test user & quiz:

npm run seed


Run backend:

npm run dev


Backend runs on http://localhost:5000

3. Frontend Setup
cd frontend
npm install


Create .env inside frontend/:

VITE_API_BASE=http://localhost:5000/api


Run frontend:

npm run dev


Frontend runs on http://localhost:5173

###  API Endpoints
Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login user

Quiz

GET /api/quiz/questions/:quizId → Fetch questions (protected)

POST /api/quiz/submit → Submit answers, calculate result (protected)

Certificate

GET /api/cert/download/:resultId → Download PDF certificate (protected)

### Usage

Register or Login

Use /register or /login

Example seeded user: test@example.com / password123

Take Quiz

Questions fetched from backend

Navigate using Next/Prev

Submit answers

View Results

Shows score and pass/fail

resultId generated and stored

Download Certificate

Click “Download Certificate”

PDF generated server-side with your name, quiz, score, date
