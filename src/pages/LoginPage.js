import React from 'react'
import './css/LoginPage.css'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  return (
    <div>
        <div className='side-container'>
            <h2>Sample <span> Login </span> Page</h2>
        </div>
        <div className='login-container'>
            <LoginForm></LoginForm>
        </div>
    </div>
  )
}
