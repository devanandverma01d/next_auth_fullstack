'use client'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
  {/* Hooks */}
  const router = useRouter()
  {/*All states */}
  const[name,setName]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  {/*handleRegister */}
  const handleRegister = async (e) => {
    e.preventDefault();
  
    console.log('handleRegisterData--> Name:', name, "Email:", email, "Password:", password);
  
    try {
      const response = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      // Check if the response status is successful (2xx range)
      console.log(response)
      if (response.ok) {
        // Get the response data as JSON
        const responseData = await response.json();
        console.log("Response Data -->", responseData);

      } else {
        // If the response status is not successful, handle the error
        // You can parse the response text to see the error message sent by the server
        const errorResponse = await response.text();
        console.error("Error occurred while registering:", errorResponse);
      }
    } catch (error) {
      console.error("Error occurred while registering:", error);
   
    }
    alert("registration done successfully")
    router.push('/login')

  }

  
  {/*Return  */}
  return (
   <div style={{marginTop:'50px',padding:'20px',width:'50%',marginLeft:'150px'}}>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="name"  placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password" />
        </div><br />
        <button type="submit" onClick={handleRegister} className="btn btn-primary">Register</button>
      </form>
   </div>


  )
}

export default Register;