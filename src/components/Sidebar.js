import React from 'react'
import './css/Sidebar.css'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate();
    
  return (
    <div id='sidebar'>
        <ul>
            <li>Dashboard</li>
        </ul>
        <p id='logout-btn' onClick={()=>{navigate("/")}}>Logout</p>
    </div>
  )
}
