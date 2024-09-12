import React from 'react'
import './css/Navbar.css'

export default function Navbar({ showSidebar, setShowSidebar }) {
  return (
    <div id='navbar'>
        <div id='sidebar-menu' onClick={()=>setShowSidebar(!showSidebar)}>
            {showSidebar ? <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495
                18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996
                5.63672L11.9997 10.5865Z"></path>
            </svg> : <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>}
        </div>
        <h1 id='title'>Sample</h1>
    </div>
  )
}
