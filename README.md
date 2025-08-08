# 📘 StudyNotion - EdTech Platform

A full-stack EdTech platform where educators can create and sell courses, and learners can enroll, track progress, and pay securely online. Inspired by platforms like Udemy, built with scalability and user experience in mind.

🌐 **Live Demo**: [studynotion-frontend-khaki.vercel.app](https://studynotion-frontend-khaki.vercel.app)

---

## 🚀 Features

-  Instructor dashboard to create & manage courses
-  Student dashboard to enroll & track progress
-  Course playback with video player
-  Secure payment using Razorpay
-  Upload course content with Cloudinary
-  JWT-based authentication (Login / Signup)
-  Fully responsive (mobile + desktop)
-  Admin panel for user & content moderation

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, Bcrypt
- **Payments**: Razorpay Integration
- **Cloud**: Cloudinary for media upload
- **Hosting**: Vercel (Frontend) + Render (Backend) + MongoDB Atlas

---

## 📁 Folder Structure

```
studynotion/
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   ├── index.js
│   └── .env  ← (ignored in git)
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env  ← (ignored in git)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/studynotion.git
cd studynotion
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/` and add:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY=your_razorpay_key
```

Start the frontend app:

```bash
npm start
```

---

## 🔮 Upcoming Features

-  AI quiz generator
-  Downloadable notes/PDFs per lecture
-  Dark mode toggle
-  Email notifications
-  Review & rating system

---

## 🧠 Contributing

We welcome contributions!

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
