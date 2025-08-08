import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png"
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";
import { checkEnvironmentVariables } from "../../utils/envChecker";


const {COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API} = studentEndpoints;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }
        script.onerror= () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
}


export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try{
        // Check environment variables using the utility
        const envCheck = checkEnvironmentVariables();
        if (!envCheck) {
            toast.error("Environment configuration is missing. Please contact support.");
            return;
        }
        
        console.log("COURSE_PAYMENT_API:", COURSE_PAYMENT_API);
        console.log("Token:", token ? "Present" : "Missing");
        console.log("Courses:", courses);
        console.log("User Details:", userDetails);
        
        //load the script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if(!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

        console.log("Razorpay script loaded successfully");

        //initiate the order
        console.log("Making API call to:", COURSE_PAYMENT_API);
        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
                                {courses},
                                {
                                    Authorization: `Bearer ${token}`,
                                })
        console.log("PRINTING orderResponse");                 
     
        if(!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("PRINTING orderResponse", orderResponse);
        
        // Razorpay key is already checked in checkEnvironmentVariables()
        console.log("Razorpay key found:", process.env.REACT_APP_RAZORPAY_KEY_ID);
        
        //options
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            currency: orderResponse.data.message.currency,
            amount: `${orderResponse.data.message.amount}`,
            order_id:orderResponse.data.message.id,
            name:"StudyNotion",
            description: "Thank You for Purchasing the Course",
            image:rzpLogo,
            prefill: {
                name:`${userDetails.firstName}`,
                email:userDetails.email
            },
            handler: function(response) {
                console.log("🎉 Payment successful! Razorpay response:", response);
                //send successful wala mail
                sendPaymentSuccessEmail(response, orderResponse.data.message.amount,token );
                //verifyPayment
                verifyPayment({...response, courses}, token, navigate, dispatch);
            }
        }
        //miss hogya tha 
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function(response) {
            console.log("❌ Payment failed! Razorpay error:", response);
            toast.error("Payment failed. Please try again.");
        })

    }
    catch(error) {
        console.log("PAYMENT API ERROR.....", error);
        console.log("Error type:", typeof error);
        console.log("Error response:", error.response);
        console.log("Error message:", error.message);
        console.log("Error stack:", error.stack);
        
        // More specific error messages
        if (error.response?.status === 404) {
            toast.error("API endpoint not found. Please check if the server is running.");
        } else if (error.response?.status === 401) {
            toast.error("Authentication failed. Please login again.");
        } else if (error.response?.status === 500) {
            toast.error("Server error. Please try again later.");
        } else if (error.code === 'NETWORK_ERROR' || error.message?.includes('Network Error')) {
            toast.error("Network error. Please check your internet connection.");
        } else if (error.message) {
            toast.error(error.message);
        } else if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Could not make Payment. Please check your internet connection and try again.");
        }
    }
    toast.dismiss(toastId);
}

async function sendPaymentSuccessEmail(response, amount, token) {
    try{
        await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount,
        },{
            Authorization: `Bearer ${token}`
        })
    }
    catch(error) {
        console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
    }
}

//verify payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    dispatch(setPaymentLoading(true));
    try{
        console.log("🔍 Starting payment verification with data:", bodyData);
        
        const response  = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
            Authorization:`Bearer ${token}`,
        })

        console.log("✅ Payment verification response:", response.data);

        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Payment Successful! You are added to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    }   
    catch(error) {
        console.log("❌ PAYMENT VERIFY ERROR....", error);
        console.log("Error response:", error.response?.data);
        console.log("Error status:", error.response?.status);
        
        // More specific error messages
        if (error.response?.status === 401) {
            toast.error("Authentication failed. Please login again.");
        } else if (error.response?.status === 500) {
            toast.error("Server error during payment verification. Please contact support.");
        } else if (error.message) {
            toast.error(error.message);
        } else {
            toast.error("Could not verify Payment. Please try again.");
        }
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}