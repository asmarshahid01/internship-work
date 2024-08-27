import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './Schema.js'
import './css/Form.css'

function Form() {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    setSuccess(true);
  };

  return (
    <>
    {success ? <p className='success-msg'>Successful</p> : <form onSubmit={handleSubmit(onSubmit)}>
      <div className='field'>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p className='error-msg'>{errors.name.message}</p>}
      </div>
      <div className='field'>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p className='error-msg'>{errors.email.message}</p>}
      </div>
      <div className='field'>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p className='error-msg'>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>}
    </>
  );
}

export default Form;