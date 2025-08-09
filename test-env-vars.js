require('dotenv').config();

console.log("=== Testing Environment Variables ===");
console.log("");

console.log("📧 Mail Configuration:");
console.log("MAIL_HOST:", process.env.MAIL_HOST || "❌ NOT SET");
console.log("MAIL_USER:", process.env.MAIL_USER || "❌ NOT SET");
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "***" + process.env.MAIL_PASS.slice(-4) : "❌ NOT SET");
console.log("");

console.log("🔑 Razorpay Configuration:");
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID || "❌ NOT SET");
console.log("RAZORPAY_SECRET_KEY:", process.env.RAZORPAY_SECRET_KEY ? "***" + process.env.RAZORPAY_SECRET_KEY.slice(-4) : "❌ NOT SET");
console.log("");

console.log("🌐 Frontend URL:");
console.log("FRONTEND_URL:", process.env.FRONTEND_URL || "❌ NOT SET");
console.log("");

console.log("📁 Database Configuration:");
console.log("MONGODB_URL:", process.env.MONGODB_URL ? "✅ SET" : "❌ NOT SET");
console.log("");

console.log("=== End Test ===");

