import React from 'react';
import { Button } from '../components/Button'; 

const subscribe = () => {
  return (
    <div>
      <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id="contact-us">
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up
          <span className='text-red-500'> Updates </span>& Newsleters
        </h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p=2.5 sm:border sm:border-gray-400 rounded-full'>
          <input className='input'
          type='text'
          placeholder='Enter Your Email' />
        
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up"  fullWidth/>
        </div>
        </div>

      </section>

    </div>
  )
}

export default subscribe