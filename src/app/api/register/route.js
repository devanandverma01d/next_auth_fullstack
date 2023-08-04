import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


   
   export const POST = async(request)=>{
    const{name,email,password} = await request.json();
    console.log('Name-:', name, "Email:-", email, "Password:-", password)
    await connect();
    const newuser =new User({name,email,password})
    try {
        await newuser.save()
        return new NextResponse(JSON.stringify({msg:"User has been created"}),{status:(201)});
    } catch (error) {
        throw new Error(error)
    }
   } 