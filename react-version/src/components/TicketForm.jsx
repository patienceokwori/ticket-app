import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function TicketForm({onCreated}){
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [priority,setPriority]=useState('Low')

  const submit = async(e)=>{
    e.preventDefault()
    if(!title||!desc) return
    try{
      await addDoc(collection(db,'tickets'), {
        title, description: desc, priority, status:'open', createdAt: serverTimestamp()
      })
      setTitle(''); setDesc(''); setPriority('Low')
      onCreated && onCreated()
    }catch(err){ console.error(err); alert('Failed') }
  }
  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-6">
      <input className="input mb-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="input mb-2" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
      <select className="input mb-2" value={priority} onChange={e=>setPriority(e.target.value)}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <button className="btn-primary">Submit Ticket</button>
    </form>
  )
}
