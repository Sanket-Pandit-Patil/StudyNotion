const Razorpay = require("razorpay");
require("dotenv").config(); // Load environment variables

console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID); // ✅ Debug
console.log("SECRET:", process.env.RAZORPAY_SECRET_KEY ? "✅ Exists" : "❌ Missing");

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
