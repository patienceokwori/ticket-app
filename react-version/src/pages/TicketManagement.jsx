import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import TicketForm from '../components/TicketForm'

export default function TicketManagement(){
  const [tickets, setTickets] = useState([])

  useEffect(()=>{
    const q = query(collection(db,'tickets'), orderBy('createdAt','desc'))
    const unsub = onSnapshot(q, snap => {
      setTickets(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return ()=>unsub()
  },[])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl mb-4">Ticket Management</h2>
      <TicketForm />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map(t=>(
          <div key={t.id} className="p-4 border rounded shadow bg-white">
            <h3 className="font-bold">{t.title}</h3>
            <p className="text-sm">{t.description}</p>
            <div className="mt-2 text-xs">Priority: {t.priority}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
