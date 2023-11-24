import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const Footer = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='flex sm:flex-row flex-col justify-between items-center border-t border-[#d9dbe9] max-w-[78rem] pb-4 m-auto '
    >
      <div className='flex justify-between  py-[27px]'>
        <div className='flex items-center gap-1'>
          <span className='text-[18px] text-[#6F3081] cursor-pointer '>
            All Rights Reserved © - Globalone.co
          </span>
          <span className='text-[18px] text-[#6e7191] '>|</span>
          <span className='text-[18px] text-[#6F3081] cursor-pointer '>
            Privacy Policy
          </span>
        </div>
      </div>
      <div className='flex gap-3'>
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
          className=' rounded-full flex items-center justify-center p-[1.1rem] bg-[#6F3081] w-5 h-5'
        >
          <a
            target='_blank'
            href='https://facebook.com/'
            rel='noopener noreferrer'
          >
            <i
              style={{ fontSize: '17px' }}
              className='fa fa-facebook text-white'
              aria-hidden='true'
            ></i>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.6 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
          className=' rounded-full flex items-center justify-center p-[1.1rem] bg-[#6F3081] w-5 h-5'
        >
          <a
            target='_blank'
            href='https://instagram.com/'
            rel='noopener noreferrer'
          >
            <i
              style={{ fontSize: '17px' }}
              className='fa fa-instagram text-white'
              aria-hidden='true'
            ></i>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
          className=' rounded-full flex items-center justify-center p-[1.1rem] bg-[#6F3081] w-5 h-5'
        >
          <a
            target='_blank'
            href='https://linkedin.com/'
            rel='noopener noreferrer'
          >
            <i
              style={{ fontSize: '17px' }}
              className='fa fa-linkedin text-white'
              aria-hidden='true'
            ></i>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
