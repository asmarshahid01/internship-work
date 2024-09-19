import { React, useState } from 'react'
import './css/AddEntry.css'

export default function AddEntry({ setShowAddEntry }) {
    const [entryState, setENtryState] = useState({});

    const handleEntryChange = (e) => {
        return {...entryState, [e.target.name]: e.target.value}
    }

  return (
    <div id='add-entry-container'>
        <div id='add-entry-input-container'>
            <input type='text' name='uname' placeholder='username' value={entryState.uname} onChange={handleEntryChange}></input>
            <input type='email' name='email' placeholder='email' value={entryState.email} onChange={handleEntryChange}></input>
            <input type='text' name='pass' placeholder='password' value={entryState.pass} onChange={handleEntryChange}></input>
        </div>
        <div id='add-entry-btn-container'>
            <button id='add-entry-cancel-btn' onClick={()=>setShowAddEntry(false)}>Cancel</button>
            <button id='add-entry-add-btn'>Add</button>
        </div>
    </div>
  )
}
