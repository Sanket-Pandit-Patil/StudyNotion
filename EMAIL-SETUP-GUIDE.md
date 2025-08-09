# 📧 Email Setup Guide for Render Deployment

## 🚨 Problem Identified

Your deployed backend on Render is missing email functionality because:
1. **Missing email environment variables** on Render
2. **sendOTP function was not sending emails** (now fixed)
3. **Reset password URL was hardcoded to localhost** (now fixed)

## 🛠️ Required Environment Variables for Render

Add these to your Render backend environment variables:

### **Email Configuration**
```
MAIL_HOST=smtp.gmail.com
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-gmail-app-password
MAIL_FROM=your-email@gmail.com
```

### **Frontend URL for Password Reset**
```
FRONTEND_URL=https://your-vercel-frontend.vercel.app
```

## 📋 Step-by-Step Setup

### **Step 1: Get Gmail App Password**

1. **Go to [Google Account Settings](https://myaccount.google.com/)**
2. **Click "Security"**
3. **Enable "2-Step Verification" if not already enabled**
4. **Click "App passwords"**
5. **Select "Mail" and "Other (Custom name)"**
6. **Enter "StudyNotion" as name**
7. **Copy the 16-character password**

### **Step 2: Add Environment Variables to Render**

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click on your StudyNotion backend service**
3. **Go to "Environment" tab**
4. **Add these variables:**

| Variable Name | Value |
|---------------|-------|
| `MAIL_HOST` | `smtp.gmail.com` |
| `MAIL_USER` | `your-email@gmail.com` |
| `MAIL_PASS` | `your-16-char-app-password` |
| `MAIL_FROM` | `your-email@gmail.com` |
| `FRONTEND_URL` | `https://your-vercel-frontend.vercel.app` |

5. **Click "Save Changes"**

### **Step 3: Redeploy Backend**

1. **Go to "Manual Deploy" section**
2. **Click "Deploy latest commit"**
3. **Wait for deployment to complete**

## 🧪 Testing Email Functionality

### **Test 1: OTP Sending**
1. **Go to your deployed frontend**
2. **Try to sign up with a new email**
3. **Check if OTP email is received**
4. **Check Render logs for email success/error**

### **Test 2: Password Reset**
1. **Go to "Forgot Password" page**
2. **Enter your email**
3. **Check if reset email is received**
4. **Verify the link goes to your Vercel frontend**

## 🔍 Troubleshooting

### **Issue 1: "Could not send OTP"**
- Check Render environment variables are set correctly
- Verify Gmail app password is correct
- Check Render logs for email errors
- Ensure `MAIL_HOST` is exactly `smtp.gmail.com`

### **Issue 2: Emails not received**
- Check spam/junk folder
- Verify `MAIL_USER` and `MAIL_PASS` are correct
- Check Gmail account security settings
- Ensure 2FA is enabled for app passwords

### **Issue 3: Reset password link broken**
- Verify `FRONTEND_URL` is correct
- Check if the link goes to your Vercel domain
- Ensure the route exists on your frontend

## 📱 Render Logs to Check

After trying to send OTP, check Render logs for:

```
✅ Success: "OTP Email sent successfully: 250 Message accepted"
❌ Error: "Error sending OTP email: [error details]"
```

## 🎯 Expected Result

After setup:
- ✅ OTP emails are sent when signing up
- ✅ Password reset emails are sent
- ✅ All links point to your deployed frontend
- ✅ No more "Could not send OTP" errors

## 🔐 Security Notes

- **Never commit `.env` files to Git**
- **Use Gmail app passwords, not your main password**
- **Regularly rotate app passwords**
- **Monitor Render logs for any email errors**

## 📞 Support

If you still have issues:
1. Check Render logs for specific error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Ensure your Gmail account allows SMTP access
