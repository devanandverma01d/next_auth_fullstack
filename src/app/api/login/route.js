import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST=async(request)=>{
    const{email,password}=await request.json()
    console.log("email:", email, "password:", password)
    await connect();
    const user = await User.findOne({email:email});
    if (user){
        return new NextResponse(JSON.stringify(user),{status:201})
    }
    else{
        throw new Error("User dose not exist")
    }
} 