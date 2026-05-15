# 🚀 Community Hub Backend API

This is the backend API for the Community Hub application built using Node.js and Express. It provides endpoints to manage posts and users.

---

## 📌 Project Overview

This project is part of Week 10: Backend Development. It focuses on:

- Building a REST API using Express
- Structuring a backend with routes, controllers, and middleware
- Handling HTTP requests and responses
- Preparing for database integration (Week 11)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- dotenv
- Nodemon (development)

---

## 📁 Project Structure


project-root/
│
├── server.js
├── package.json
├── .env
│
└── src/
├── app.js
│
├── routes/
│ ├── index.js
│ ├── posts.js
│ └── users.js
│
├── controllers/
│ ├── postsController.js
│ └── usersController.js
│
├── middleware/
│ ├── logger.js
│ └── errorHandler.js
│
└── data/
└── store.js


---

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-project-folder>
Install dependencies:
npm install
Create a .env file:
PORT=3000
Run the server:
npm run dev
🚀 Server Running

Once started, the server will run at:

http://localhost:3000
📡 API Endpoints
🔹 Health Check
GET /api/health
🔹 Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get single post
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post
🔹 Users
Method	Endpoint	Description
GET	/api/users	Get all users
🧪 Testing the API

You can test endpoints using:

Browser (for GET requests)
Postman
Thunder Client (VS Code extension)

Example:

http://localhost:3000/api/posts
🧠 Key Concepts Learned
Express routing
Middleware usage
MVC (Model-View-Controller) structure
Error handling in Node.js
REST API design
⚠️ Notes
Data is currently stored in-memory (no database yet)
This will be upgraded in Week 11 (Database Integration)
🔜 Next Steps
Integrate database (MongoDB or SQL)
Add authentication (JWT)
Connect frontend
👨‍💻 Author

Stephen Mwai

📜 License

This project is licensed under the ISC License.


---
