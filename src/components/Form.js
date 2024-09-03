import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import schema from './Schema.js'
import './css/Form.css'

export default function Form() {

    const [submit, setSubmit] = useState(false);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const state = {};

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

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

    const onSubmit = (data) => {
        setSubmit(true);
        navigate("/dashboard");
    };

  return (
    <>
    {!submit ? <div className='input-container'>
        <h2>Create an account</h2>
        <p className='desc'>Enter your information below to create your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('fname')} id='fname' type='text' name='fname' placeholder='john' value={state.fname} onChange={handleChange} required></input>
            {errors.fname && <p className='error-msg'>{errors.fname.message}</p>}

            <input {...register('lname')} id='lname' type='text' name='lname' placeholder='doe' value={state.lname} onChange={handleChange} required></input>
            {errors.lname && <p className='error-msg'>{errors.lname.message}</p>}

            <div id='phone'>
                <input id='code' type='text' name='code' placeholder='92' value={code} onChange={handleCode} required></input>
                <input id='num' type='text' name='number' placeholder='xxxxxxxxxx' value={phone} onChange={handlePhone} required></input>
            </div>
            <input {...register('email')} id='email' type='email' name='email' placeholder='Email' value={state.email} onChange={handleChange} required></input>
            {errors.email && <p className='error-msg'>{errors.email.message}</p>}
            <input id='submit' type='submit' value='Submit'></input>
        </form>
    </div> : <h2 className='success-msg'>Account Created Successfully</h2>}
    </>
  )
}