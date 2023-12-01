import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const [state, handleSubmit] = useForm('mdorrbrq');
  const contactRef = React.useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearStates = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleContactSubmission = () => {
    if (!name || !email || !message) {
      // Check if any of the fields are empty
      toast.error('Please fill all the fields', {
        style: {
          padding: '20px 60px',
          fontSize: '1.2rem',
        },
      }); // Show an error message
    } else {
      // If all fields are filled, proceed with form submission
      console.log('Form submitted:', { name, email, message });

      toast.success('Successfully sent your message', {
        style: {
          padding: '20px 60px',
          fontSize: '1.2rem',
        },
      });

      setTimeout(clearStates, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div ref={contactRef}>
        <div
          style={{ boxShadow: '0 6px 12px rgba(20,20,43,.05)' }}
          className='flex flex-col gap-5 sm:p-10 p-5 bg-white rounded-[40px] border border-[#eff0f6]'
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            name='username'
            id='username'
            className=' py-5 px-3 border rounded-xl '
            placeholder='Your Name'
            required
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            name='email'
            id='email'
            className=' py-5 px-3 border rounded-xl '
            placeholder='Your Email'
            required
          />

          <ValidationError prefix='Email' field='email' errors={state.errors} />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            name='message'
            id='text'
            className=' py-5 px-3 border rounded-xl resize-none '
            rows={5}
            placeholder='Enter Something ......'
            required
          ></textarea>

          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />

          <div onClick={handleContactSubmission} className='my-5 sm:w-fit w-full relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#6F3081] py-6 self-center px-24 flex items-center rounded-full font-bold'>
            <button
              type='submit'
              
              className='z-10'
            >
              {' '}
              Contact Us
            </button>
            <div className='absolute rounded-full opacity-20 left-[-42px] top-[-128%] bg-[#fcd0e6] z-0 w-40 h-40 ' />
            <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
          </div>
          <Toaster />
        </div>
      </div>
    </form>
  );
};

export default Form;
