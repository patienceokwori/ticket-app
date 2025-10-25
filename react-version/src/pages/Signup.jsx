import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const nav = useNavigate()

  const submit=async(e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, pass)
      nav('/dashboard')
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl mb-4">Sign up</h2>
      <form onSubmit={submit} className="space-y-4">
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input className="input" type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} required/>
        <button className="btn-primary w-full">Sign up</button>
      </form>
    </div>
  )
}
