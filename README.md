# Sexylaydeez

A modern, full-stack web application built with React and Node.js/Express.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- Modern React frontend with responsive design
- RESTful API backend with Express.js
- User authentication and authorization
- Database integration with MongoDB
- Real-time updates capability
- Docker support for easy deployment
- Comprehensive error handling
- Automated CI/CD with GitHub Actions

## 🛠 Tech Stack

**Frontend:**
- React 18+
- Axios (HTTP client)
- React Router (navigation)
- Tailwind CSS (styling)
- Redux (state management)

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT (authentication)
- Dotenv (configuration management)

**DevOps:**
- Docker & Docker Compose
- GitHub Actions
- ESLint & Prettier (code quality)

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tastedlaydee-max/studious-memory.git
   cd studious-memory
   ```

2. **Install dependencies:**
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd client && npm install && cd ..

   # Install backend dependencies
   cd server && npm install && cd ..
   ```

## ⚙️ Configuration

1. **Create `.env` files:**

   **Backend (`server/.env`):**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/studious-memory
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

   **Frontend (`client/.env`):**
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

2. **Ensure MongoDB is running:**
   ```bash
   # If using local MongoDB
   mongod
   ```

## ▶️ Running the Application

### Development Mode

**Option 1: Run both concurrently (from root)**
```bash
npm run dev
```

**Option 2: Run separately**
```bash
# Terminal 1 - Backend
cd server && npm start

# Terminal 2 - Frontend
cd client && npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

### Production Mode

```bash
# Build frontend
cd client && npm run build && cd ..

# Start backend in production
cd server && NODE_ENV=production npm start
```

## 📁 Project Structure

```
studious-memory/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API calls
│   │   ├── redux/          # State management
│   │   └── App.js
│   └── package.json
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── models/             # Database models
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   ├── server.js
│   └── package.json
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── .gitignore
├── LICENSE
└── README.md
```

## 💻 Development

### Code Quality

```bash
# Run linting
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

### Best Practices

- Follow ESLint rules
- Use Prettier for consistent formatting
- Write meaningful commit messages
- Create branches for new features: `git checkout -b feature/your-feature-name`
- Submit pull requests for code review

## 🐳 Docker Setup

**Build and run with Docker:**
```bash
docker-compose up --build
```

**Stop containers:**
```bash
docker-compose down
```

## 🚢 Deployment

Deployment guides for popular platforms:

### Heroku
```bash
heroku create your-app-name
git push heroku main
```

### AWS
- Use AWS Elastic Beanstalk or EC2
- Configure RDS for MongoDB Atlas
- Set up CloudFront for CDN

### Vercel (Frontend) + Railway/Render (Backend)
- Frontend: Deploy to Vercel
- Backend: Deploy to Railway or Render

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Last Updated:** 2026-06-29