# Apple Tree Infotech - Full Stack Portal

A full-stack web application for Apple Tree Infotech educational platform, offering course exploration, syllabus downloads, interactive enrollment inquiries, and student feedback management.

---

## Architecture Overview

```
                      +-----------------------------+
                      |       Vercel (Frontend)     |
                      |  React 19 + Vite + SPA      |
                      +--------------+--------------+
                                     |
                                     | HTTPS / REST APIs
                                     v
                      +-----------------------------+
                      |       Render (Backend)      |
                      |   Express 5.2 + Node.js     |
                      +--------------+--------------+
                                     |
                                     | TLS / SSL
                                     v
                      +-----------------------------+
                      |   Cloud MySQL (Database)    |
                      |  feedbacks | syllabus | ... |
                      +-----------------------------+
```

- **Frontend:** React 19, Vite, React Router v7, Axios, Responsive CSS.
- **Backend:** Node.js, Express 5.2, MySQL2 connection pooling, CORS, dotenv.
- **Database:** MySQL relational database (`feedback_db`) with tables: `feedbacks`, `syllabus_requests`, `enrollments`.

---

## Features

- **Course Catalog:** Over 25+ software engineering, design, AI, ERP, and foundational courses.
- **Syllabus Requests:** Direct syllabus downloads and lead capture per course.
- **Course Enrollment:** Student enrollment request form with backend registration and WhatsApp integration.
- **Student Feedback:** Comprehensive feedback submission form.
- **Production-Ready:** Configured for Vercel SPA routing (`vercel.json`), Render web services (`render.yaml`), and secure cloud MySQL.

---

## Environment Variables

### Frontend Configuration (`.env`)
```bash
# Production backend API URL (without trailing slash)
VITE_API_URL=https://your-backend.onrender.com
```

### Backend Configuration (`backend/.env`)
```bash
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app

# Database Options (Use separate parameters OR single DATABASE_URL)
DB_HOST=your-mysql-host.cloud
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=feedback_db
DB_PORT=3306
DB_SSL=true

# Or connection URI:
# DATABASE_URL=mysql://user:pass@host:port/database
```

---

## Local Setup & Development

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or v20+)
- [MySQL](https://dev.mysql.com/) server (local or cloud)

### 2. Database Initialization
Import the schema and initial data into MySQL:
```bash
mysql -u root -p < init.sql
```

### 3. Backend Setup
```bash
cd backend
npm install
npm start
# Server starts on http://localhost:5000
```

### 4. Frontend Setup
```bash
# In the project root
npm install
npm run dev
# Vite dev server starts on http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API status and greeting |
| `GET` | `/health` | Live health check with MySQL database connectivity test |
| `POST` | `/feedback` | Submit student feedback (`fullName`, `email`, `mobile`, `college`, `branch`, `feedbackPoint`, `message`) |
| `POST` | `/syllabus` | Request course syllabus (`phone`, `email`, `course`) |
| `POST` | `/enroll` | Submit enrollment application (`name`, `phone`, `email`, `course`, `message`) |

---

## Production Deployment

### Frontend (Vercel)
1. Link repository to Vercel.
2. Root Directory: `./`
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add Environment Variable: `VITE_API_URL=https://<your-backend-service>.onrender.com`

### Backend (Render)
1. Deploy as a Web Service from the same repository.
2. Root Directory: `backend`
3. Runtime: **Node**
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Configure environment variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`, `DB_SSL`, `FRONTEND_URL`, `PORT=5000`).

