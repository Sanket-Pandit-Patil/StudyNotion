# StudyNotion Environment Setup Guide

## 🔧 Required Environment Files

### 1. Frontend Environment (.env in studynotion folder)

Create a file named `.env` in the `studynotion` folder (same level as package.json):

```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_test_key_here
```

### 2. Backend Environment (.env in studynotion/server folder)

Create a file named `.env` in the `studynotion/server` folder:

```env
RAZORPAY_KEY_ID=rzp_test_your_test_key_here
RAZORPAY_SECRET_KEY=your_razorpay_secret_key_here
MONGODB_URL=mongodb://localhost:27017/studynotion
JWT_SECRET=your_jwt_secret_here
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_password
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=studynotion
```

## 🚀 Getting Razorpay Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login to your account
3. Go to Settings → API Keys
4. Generate a new key pair
5. Copy the Key ID and Key Secret
6. Replace `rzp_test_your_test_key_here` with your actual test key ID
7. Replace `your_razorpay_secret_key_here` with your actual test secret key

## 🧪 Testing Setup

After creating the environment files:

1. **Test Backend:**
   ```bash
   cd studynotion
   node test-backend.js
   ```

2. **Test Payment Endpoint:**
   ```bash
   cd studynotion
   node test-payment-endpoint.js
   ```

3. **Test Environment Variables:**
   ```bash
   cd studynotion
   node debug-env.js
   ```

## 🔄 Restart Servers

After creating environment files:

1. **Stop both servers (Ctrl+C)**
2. **Start Backend:**
   ```bash
   cd studynotion/server
   npm run dev
   ```
3. **Start Frontend (new terminal):**
   ```bash
   cd studynotion
   npm start
   ```

## ✅ Expected Results

- `test-backend.js` should show: "✅ Backend is running"
- `test-payment-endpoint.js` should show: "✅ Payment endpoint is working"
- `debug-env.js` should show: "✅ REACT_APP_BASE_URL is set" and "✅ REACT_APP_RAZORPAY_KEY_ID is set" 