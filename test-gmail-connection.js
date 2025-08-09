const nodemailer = require("nodemailer");

async function testGmailConnection() {
    console.log("=== Testing Gmail SMTP Connection ===");
    
    // Test configuration
    const testConfig = {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'patilsanket22144@gmail.com', // Replace with your email
            pass: 'YOUR_APP_PASSWORD_HERE' // Replace with your app password
        }
    };
    
    console.log("Testing with config:", {
        host: testConfig.host,
        port: testConfig.port,
        user: testConfig.auth.user,
        pass: testConfig.auth.pass ? '***' + testConfig.auth.pass.slice(-4) : 'NOT_SET'
    });
    
    try {
        // Create transporter
        const transporter = nodemailer.createTransport(testConfig);
        
        // Verify connection
        console.log("Verifying connection...");
        await transporter.verify();
        console.log("✅ Gmail SMTP connection successful!");
        
        // Test sending a simple email
        console.log("Testing email sending...");
        const info = await transporter.sendMail({
            from: 'patilsanket22144@gmail.com',
            to: 'patilsanket22144@gmail.com',
            subject: 'Test Email from StudyNotion',
            text: 'This is a test email to verify Gmail SMTP is working.',
            html: '<h1>Test Email</h1><p>This is a test email to verify Gmail SMTP is working.</p>'
        });
        
        console.log("✅ Test email sent successfully!");
        console.log("Message ID:", info.messageId);
        console.log("Response:", info.response);
        
    } catch (error) {
        console.error("❌ Gmail SMTP connection failed!");
        console.error("Error details:", error.message);
        
        if (error.code === 'EAUTH') {
            console.error("🔐 Authentication failed! Check your app password.");
            console.error("Make sure:");
            console.error("1. 2-Step Verification is enabled on your Gmail account");
            console.error("2. You're using an app password, not your regular password");
            console.error("3. The app password is exactly 16 characters");
        } else if (error.code === 'ECONNECTION') {
            console.error("🌐 Connection failed! Check your internet and firewall settings.");
        }
    }
    
    console.log("=== End Test ===");
}

// Run the test
testGmailConnection();
