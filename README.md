LXDemos

LXDemos is a web platform for creating, sharing, and discovering reproducible Linux configurations.
It enables developers and teams to showcase environment setups, collaborate on configurations, and explore community-curated Linux demos.

📘 Overview

Configuring Linux environments repeatedly across systems or teams is inefficient and error-prone.
LXDemos solves this by providing a central hub for reproducible configurations that can be shared, forked, and improved collaboratively.

⚙️ Features

🔐 Authentication — Secure login and registration using bcrypt and JWT

📂 Configuration Library — Explore and share Linux configurations

✍️ Upload Feature — Submit configuration files and metadata

💬 Community Interaction (planned) — Likes, comments, and forks

🤖 AI Assistant (planned) — Chatbot to guide setup and debugging

👤 User Dashboard — Manage personal configurations and profile

🧠 Tech Stack
Layer	Technology
Frontend	React (Vite), Tailwind CSS, Axios, React Router
Backend	Node.js, Express, Mongoose
Database	MongoDB
Auth	bcrypt, JWT
Other	ESLint, dotenv
🧱 Architecture
Frontend (React)
   │
   ├──> REST API (Axios)
   │
Backend (Express + Node.js)
   ├── Auth routes (JWT)
   ├── Config CRUD routes
   │
MongoDB (Mongoose)
   ├── users
   └── configurations

📂 Project Structure
LXDemos/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── vite.config.js
│
├── server/              # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md

🔗 API Endpoints
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register new user	❌
POST	/api/auth/login	Authenticate user	❌
GET	/api/configs	Get all configurations	❌
POST	/api/configs	Upload configuration	✅
GET	/api/configs/:id	Fetch configuration by ID	❌
DELETE	/api/configs/:id	Delete configuration	✅
🔒 Authentication Flow

User registers → password hashed using bcrypt

User logs in → server issues JWT

Client stores token and attaches it to Authorization header

Protected routes verified via middleware

⚡ Installation
Prerequisites

Node.js (v18+)

MongoDB (local or Atlas)

Git

Steps
# Clone repository
git clone https://github.com/<your-username>/lxdemos.git
cd lxdemos

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install

Environment Variables

Create server/.env:

PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/lxdemos
JWT_SECRET=your_secret_key

Run
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev


Frontend → http://localhost:5173
Backend → http://localhost:5000

🤝 Contributing

Fork the repository

Create a new branch (feature/<feature-name>)

Commit and push your changes

Open a Pull Request

Please follow existing structure and use consistent linting.

🧭 Roadmap

 Authentication (JWT + bcrypt)

 Configuration library

 Profile management

 Community features (likes/comments)

 AI assistant

 Docker-based live previews
