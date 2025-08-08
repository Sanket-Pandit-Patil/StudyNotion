// Test script to check payment endpoint
const axios = require('axios');

async function testPaymentEndpoint() {
    console.log("=== Payment Endpoint Test ===");
    
    try {
        // Test root endpoint
        const rootResponse = await axios.get('http://localhost:4000/');
        console.log("✅ Backend root endpoint is working");
        console.log("Root response:", rootResponse.data);
        
        // Test payment endpoint (should return 401 without auth)
        try {
            const paymentResponse = await axios.post('http://localhost:4000/api/v1/payment/capturePayment', {
                courses: ['test_course_id']
            });
            console.log("❌ Payment endpoint should require authentication");
        } catch (error) {
            if (error.response?.status === 401) {
                console.log("✅ Payment endpoint is working (requires authentication)");
            } else {
                console.log("❌ Payment endpoint error:", error.response?.status, error.response?.data);
            }
        }
        
    } catch (error) {
        console.error("❌ Backend connection failed");
        console.error("Error:", error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error("Backend server is not running on port 4000");
        }
    }
    
    console.log("=== End Test ===");
}

testPaymentEndpoint(); 