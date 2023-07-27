'use client'
import React, { useState } from 'react'

const Register = () => {
  {/*All states */}
  const[name,setName]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  {/*handleRegister */}
  const handleRegister=(e)=>{
    e.preventDefault()
    console.log('handleRegisterData--> Name:',name , "Email:", email, "Password:", password)
    const res = fetch('api/register',{
      method:'POST',
      headers:{
        'Content-Type':'Application/json',
      },
      body:JSON.stringify({name,email,password})
    })
    console.log("Res-->",res.data)
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