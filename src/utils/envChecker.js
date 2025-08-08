// Environment variable checker for React app
export const checkEnvironmentVariables = () => {
    console.log("=== React Environment Variables Check ===");
    
    const envVars = {
        REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
        REACT_APP_RAZORPAY_KEY_ID: process.env.REACT_APP_RAZORPAY_KEY_ID,
        NODE_ENV: process.env.NODE_ENV
    };
    
    console.log("Environment variables:", envVars);
    
    // Check if variables are set
    if (!envVars.REACT_APP_BASE_URL) {
        console.error("❌ REACT_APP_BASE_URL is missing!");
        return false;
    } else {
        console.log("✅ REACT_APP_BASE_URL is set:", envVars.REACT_APP_BASE_URL);
    }
    
    if (!envVars.REACT_APP_RAZORPAY_KEY_ID) {
        console.error("❌ REACT_APP_RAZORPAY_KEY_ID is missing!");
        return false;
    } else {
        console.log("✅ REACT_APP_RAZORPAY_KEY_ID is set:", envVars.REACT_APP_RAZORPAY_KEY_ID);
    }
    
    console.log("✅ All environment variables are properly configured");
    return true;
};

// Function to get API endpoints
export const getApiEndpoints = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    if (!baseUrl) {
        console.error("BASE_URL is not configured!");
        return null;
    }
    
    return {
        COURSE_PAYMENT_API: `${baseUrl}/payment/capturePayment`,
        COURSE_VERIFY_API: `${baseUrl}/payment/verifyPayment`,
        SEND_PAYMENT_SUCCESS_EMAIL_API: `${baseUrl}/payment/sendPaymentSuccessEmail`,
    };
}; 