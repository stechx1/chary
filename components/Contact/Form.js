import React from 'react';

const Form = () => {
  return (
    <div
      style={{ boxShadow: '0 6px 12px rgba(20,20,43,.05)' }}
      className='flex flex-col gap-5 sm:p-10 p-5 bg-white rounded-[40px] border border-[#eff0f6]'
    >
      <input
        type='text'
        name='username'
        id='username'
        className=' py-5 px-3 border rounded-xl '
        placeholder='Your Name'
      />

      <input
        type='email'
        name='email'
        id='email'
        className=' py-5 px-3 border rounded-xl '
        placeholder='Your Email'
      />

      <textarea
        type='password'
        name='text'
        id='text'
        className=' py-5 px-3 border rounded-xl resize-none '
        rows={5}
        placeholder='Enter Something ......'
      ></textarea>

      <div className='my-5 sm:w-fit w-full relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#6F3081] py-6 self-center px-24 flex items-center rounded-full font-bold'>
        <span className='z-10'> Contact Us</span>
        <div className='absolute rounded-full opacity-20 left-[-42px] top-[-128%] bg-[#fcd0e6] z-0 w-40 h-40 ' />
        <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
      </div>
    </div>
  );
};

export default Form;
