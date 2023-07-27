 import mongoose from "mongoose";

 const connect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nextjsuserlogin')
    } catch (error) {
        throw new Error("connection failed",error)
    }
 }
 export default connect;