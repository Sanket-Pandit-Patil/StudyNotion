# Payment Debugging Guide

## 🚨 Current Issue:
You're getting a "Payment Failed" error after the Razorpay checkout.

## 🔍 Debugging Steps:

### 1. **Check Browser Console**
1. Open your browser (F12)
2. Go to Console tab
3. Try the payment flow again
4. Look for these logs:
   - `🎉 Payment successful! Razorpay response:`
   - `🔍 Starting payment verification with data:`
   - `✅ Payment verification response:`
   - `❌ PAYMENT VERIFY ERROR....`

### 2. **Check Backend Console**
1. Look at your backend server terminal
2. Look for these logs:
   - `🔍 Payment verification started`
   - `🔐 Signature verification body:`
   - `🔐 Expected signature:`
   - `🔐 Received signature:`
   - `🔐 Signatures match:`
   - `🎓 Starting student enrollment process`

### 3. **Common Issues & Solutions:**

#### **Issue 1: Signature Verification Failed**
- **Cause**: Razorpay secret key mismatch
- **Solution**: Check if `RAZORPAY_SECRET_KEY` in backend `.env` matches your Razorpay dashboard

#### **Issue 2: Missing Required Fields**
- **Cause**: Frontend not sending all required data
- **Solution**: Check if all Razorpay response fields are being sent

#### **Issue 3: Course Enrollment Failed**
- **Cause**: Database issues or invalid course ID
- **Solution**: Check if course exists and user has proper permissions

#### **Issue 4: Authentication Issues**
- **Cause**: Token expired or invalid
- **Solution**: Try logging out and logging back in

## 🧪 Test Payment Flow:

1. **Start both servers**
2. **Login to your account**
3. **Add a course to cart**
4. **Go to cart page**
5. **Click "Buy Now"**
6. **Complete Razorpay payment**
7. **Check both browser and backend console logs**

## 📋 What to Report:

Please share:
1. **Browser console logs** (F12 → Console)
2. **Backend server logs** (terminal where server is running)
3. **Any error messages** you see
4. **At what step** the payment fails

This will help identify the exact cause of the failure. 