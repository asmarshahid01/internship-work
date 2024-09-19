import React from 'react'
import './css/SideBar.css'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate();
    
  return (
    <div id='sidebar'>
        <ul>
            <li>Dashboard</li>
        </ul>
        <p id='logout-btn' onClick={()=>{navigate("/");}}>Logout</p>
    </div>
  )
}
