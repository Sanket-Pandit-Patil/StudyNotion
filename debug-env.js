// Debug script to check environment variables
const fs = require('fs');
const path = require('path');

console.log("=== Environment Variables Debug ===");

// Check if .env file exists in frontend
const frontendEnvPath = path.join(__dirname, '.env');
const backendEnvPath = path.join(__dirname, 'server', '.env');

console.log("Frontend .env path:", frontendEnvPath);
console.log("Backend .env path:", backendEnvPath);

// Check frontend .env file
if (fs.existsSync(frontendEnvPath)) {
    console.log("✅ Frontend .env file exists");
    const frontendEnvContent = fs.readFileSync(frontendEnvPath, 'utf8');
    console.log("Frontend .env content:");
    console.log(frontendEnvContent);
    
    // Check for required variables
    if (frontendEnvContent.includes('REACT_APP_BASE_URL')) {
        console.log("✅ REACT_APP_BASE_URL is defined in .env");
    } else {
        console.log("❌ REACT_APP_BASE_URL is missing from .env");
    }
    
    if (frontendEnvContent.includes('REACT_APP_RAZORPAY_KEY_ID')) {
        console.log("✅ REACT_APP_RAZORPAY_KEY_ID is defined in .env");
    } else {
        console.log("❌ REACT_APP_RAZORPAY_KEY_ID is missing from .env");
    }
} else {
    console.log("❌ Frontend .env file does not exist");
    console.log("Please create .env file in the studynotion folder with:");
    console.log("REACT_APP_BASE_URL=http://localhost:4000/api/v1");
    console.log("REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_test_key_here");
}

// Check backend .env file
if (fs.existsSync(backendEnvPath)) {
    console.log("✅ Backend .env file exists");
    const backendEnvContent = fs.readFileSync(backendEnvPath, 'utf8');
    console.log("Backend .env content:");
    console.log(backendEnvContent);
    
    // Check for required variables
    if (backendEnvContent.includes('RAZORPAY_KEY_ID')) {
        console.log("✅ RAZORPAY_KEY_ID is defined in backend .env");
    } else {
        console.log("❌ RAZORPAY_KEY_ID is missing from backend .env");
    }
    
    if (backendEnvContent.includes('RAZORPAY_SECRET_KEY')) {
        console.log("✅ RAZORPAY_SECRET_KEY is defined in backend .env");
    } else {
        console.log("❌ RAZORPAY_SECRET_KEY is missing from backend .env");
    }
} else {
    console.log("❌ Backend .env file does not exist");
    console.log("Please create .env file in the studynotion/server folder");
}

console.log("\n=== Node.js Environment Variables ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Note: REACT_APP_* variables are only available in browser environment");

console.log("=== End Debug ==="); 