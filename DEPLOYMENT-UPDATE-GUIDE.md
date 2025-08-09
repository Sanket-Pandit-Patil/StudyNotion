# Deployment Update Guide

## 🚀 How to Update Your Deployed StudyNotion Application

### **✅ Automatic Update (Recommended)**

Since you've already pushed the payment fixes to GitHub, your deployment should automatically update if you have:

1. **Vercel** - Connected to GitHub (auto-deploys on push)
2. **Railway** - Connected to GitHub (auto-deploys on push)
3. **Netlify** - Connected to GitHub (auto-deploys on push)
4. **Heroku** - Connected to GitHub (auto-deploys on push)

**Check your deployment platform dashboard** - the update should be in progress or completed.

### **🔧 Manual Update Methods**

#### **Method 1: Vercel (Frontend)**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your StudyNotion project
3. Click "Deployments" tab
4. Click "Redeploy" on the latest deployment
5. Or trigger a new deployment from GitHub

#### **Method 2: Railway (Backend)**
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Find your StudyNotion backend project
3. Go to "Deployments" tab
4. Click "Deploy" to trigger a new deployment
5. Or it should auto-deploy from GitHub

#### **Method 3: Heroku**
```bash
# If using Heroku CLI
heroku login
heroku git:remote -a your-app-name
git push heroku main
```

#### **Method 4: Netlify**
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Find your project
3. Go to "Deploys" tab
4. Click "Trigger deploy" → "Deploy site"

### **🌐 Environment Variables Update**

**IMPORTANT:** You need to update environment variables in your deployment platform:

#### **Frontend Environment Variables:**
- `REACT_APP_BASE_URL` = Your backend URL (e.g., `https://your-backend.railway.app/api/v1`)
- `REACT_APP_RAZORPAY_KEY_ID` = Your Razorpay public key (`rzp_test_...`)

#### **Backend Environment Variables:**
- `RAZORPAY_KEY_ID` = Your Razorpay public key
- `RAZORPAY_SECRET_KEY` = Your Razorpay secret key
- `MONGODB_URL` = Your MongoDB connection string
- `JWT_SECRET` = Your JWT secret
- `MAIL_HOST`, `MAIL_USER`, `MAIL_PASS` = Email configuration
- `CLOUD_NAME`, `API_KEY`, `API_SECRET` = Cloudinary configuration

### **🔍 How to Check if Update is Successful**

1. **Check deployment logs** in your platform dashboard
2. **Test the payment flow** on your live site
3. **Check browser console** for any errors
4. **Verify environment variables** are correctly set

### **🚨 Common Issues & Solutions**

#### **Issue 1: Environment Variables Not Updated**
- Go to your deployment platform settings
- Update the environment variables
- Redeploy the application

#### **Issue 2: Build Failures**
- Check the build logs in your deployment platform
- Ensure all dependencies are properly installed
- Check for any syntax errors

#### **Issue 3: Payment Still Not Working**
- Verify Razorpay keys are correct
- Check if backend URL is properly configured
- Test with Razorpay test credentials

### **📋 Quick Checklist**

- [ ] Payment fixes pushed to GitHub ✅
- [ ] Deployment configuration files added ✅
- [ ] Environment variables updated in deployment platform
- [ ] Backend redeployed with new code
- [ ] Frontend redeployed with new code
- [ ] Payment flow tested on live site
- [ ] All features working correctly

### **🎯 Expected Result**

After updating:
- Payment modal should load without authentication errors
- Razorpay checkout should work properly
- Payment verification should succeed
- Course enrollment should work
- Success emails should be sent

### **📞 Need Help?**

If you're still having issues:
1. Check your deployment platform logs
2. Verify all environment variables are set correctly
3. Test the payment flow step by step
4. Contact your deployment platform support if needed

