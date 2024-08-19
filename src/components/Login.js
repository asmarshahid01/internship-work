import React, { useState } from 'react'
import './css/Login.css'

export default function Login() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const handlePhone = (e) => {
        if(e.target.value.length < 11 && (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value))) {
            setPhone(e.target.value);
        }
    }

    const handleCode = (e) => {
        if(e.target.value.length < 4 && (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value))) {
            setCode(e.target.value);
        }
    }

  return (
    <div className='input-container'>
        <h2>Create an account</h2>
        <p>Enter your information below to create your account</p>
        <form>
            <input id='fname' type='text' placeholder='First Name' value={fname} onChange={(e) => {setFname(e.target.value)}} required></input>
            <input id='lname' type='text' placeholder='Last Name' value={lname} onChange={(e) => {setLname(e.target.value)}} required></input>
            <div id='phone'>
                <input id='code' type='text' placeholder='92' value={code} onChange={handleCode} required></input>
                <input id='num' type='text' placeholder='Phone Number' value={phone} onChange={handlePhone} required></input>
            </div>
            <input id='email' type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
            <input id='submit' type='submit' value='Submit'></input>
        </form>
    </div>
  )
}
