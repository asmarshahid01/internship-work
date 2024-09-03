import React from 'react'
import './css/LoginPage.css'
import Form from '../components/Form.js'

export default function LoginPage() {
  return (
    <div className="App">
      <div className='side-container'>
        <h2>Sample <span>Login</span> Page</h2>
      </div>
      <div className='login-container'>
        <Form></Form>
      </div>
    </div>
  )
}
