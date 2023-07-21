import React from 'react'
import { motion } from 'framer-motion'

const ResultBox = ({ number, heading }) => {
  return (
    <div

      style={{ boxShadow: '0 6px 12px rgba(20, 20, 43, 0.05)' }}
      className='flex flex-col items-center justify-center bg-white rounded-[28px] lg:max-w-[280px] py-10 px-2'
    >
      <h1 className='text-[48px] font-extrabold text-black'>{number} <span className='text-[#6F3081]'><i style={{fontSize:'38px'}} className="fa fa-plus" aria-hidden="true"></i>
</span></h1>
      <span className='text-[#6e7191] text-[18px]'>{heading}</span>
    </div>
  )
}

export default ResultBox
