// Test script to check if backend is accessible
const axios = require('axios');

async function testBackend() {
    console.log("=== Backend Connection Test ===");
    
    try {
        const response = await axios.get('http://localhost:4000/');
        console.log("✅ Backend is running");
        console.log("Response:", response.data);
    } catch (error) {
        console.error("❌ Backend connection failed");
        console.error("Error:", error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error("Backend server is not running on port 4000");
        }
    }
    
    console.log("=== End Test ===");
}

testBackend(); 