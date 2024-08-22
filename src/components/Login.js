// import React, { useState } from 'react'
// import './css/Login.css'

// export default function Login() {

//     const [fname, setFname] = useState('');
//     const [lname, setLname] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [code, setCode] = useState('');
//     const [submit, setSubmit] = useState(false);

//     const handlePhone = (e) => {
//         if(e.target.value.length < 11 && (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value))) {
//             setPhone(e.target.value);
//         }
//     }

//     const handleCode = (e) => {
//         if(e.target.value.length < 4 && (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value))) {
//             setCode(e.target.value);
//         }
//     }

//   return (
//     <>
//     {!submit ? <div className='input-container'>
//         <h2>Create an account</h2>
//         <p>Enter your information below to create your account</p>
//         <form onSubmit={()=>{setSubmit(true)}}>
//             <input id='fname' type='text' placeholder='First Name' value={fname} onChange={(e) => {setFname(e.target.value)}} required></input>
//             <input id='lname' type='text' placeholder='Last Name' value={lname} onChange={(e) => {setLname(e.target.value)}} required></input>
//             <div id='phone'>
//                 <input id='code' type='text' placeholder='92' value={code} onChange={handleCode} required></input>
//                 <input id='num' type='text' placeholder='Phone Number' value={phone} onChange={handlePhone} required></input>
//             </div>
//             <input id='email' type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
//             <input id='submit' type='submit' value='Submit'></input>
//         </form>
//     </div> : <h2 className='success-msg'>Account Created Successfully</h2>}
//     </>
//   )
// }

import React, { useState } from 'react'
import './css/Login.css'

export default function Login() {

    const [submit, setSubmit] = useState(false);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const state = {}

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

    const handleChange = (e) => {
        return {...state, [e.target.name]: e.target.value}
    }

  return (
    <>
    {!submit ? <div className='input-container'>
        <h2>Create an account</h2>
        <p>Enter your information below to create your account</p>
        <form onSubmit={()=>{setSubmit(true)}}>
            <input id='fname' type='text' name='fname' placeholder='First Name' value={state.fname} onChange={handleChange} required></input>
            <input id='lname' type='text' name='lname' placeholder='Last Name' value={state.lname} onChange={handleChange} required></input>
            <div id='phone'>
                <input id='code' type='text' name='code' placeholder='92' value={code} onChange={handleCode} required></input>
                <input id='num' type='text' name='number' placeholder='Phone Number' value={phone} onChange={handlePhone} required></input>
            </div>
            <input id='email' type='email' name='email' placeholder='Email' value={state.email} onChange={handleChange} required></input>
            <input id='submit' type='submit' value='Submit'></input>
        </form>
    </div> : <h2 className='success-msg'>Account Created Successfully</h2>}
    </>
  )
}