'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'

const Login = () => {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  {/*handleLogin */}
  const handleLogin=async(e)=>{
    e.preventDefault()
    console.log("Email:", email,"Password:", password)
    const response = await fetch('/api/login',{
      method:"POST",
      headers:{
        'Content-Type':'Application/json',
      },
      body:JSON.stringify({email,password})
    })
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      toast.success('Login successful!');
    } else {
      toast.error('User does not exist or invalid credentials!');
    }
  }
  return (
   <div style={{marginTop:'50px',padding:'20px',width:'50%',marginLeft:'150px'}}>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password" />
        </div><br />
        <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button>
        <ToastContainer position="top-center" />
      </form>
   </div>
  )
}
export default Login