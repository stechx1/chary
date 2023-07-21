import React from 'react'
import { motion } from 'framer-motion'
import Form from './Form'
const Contact = () => {
    return (
        <div className='flex flex-col gap-7 items-center'>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex flex-col gap-4 leading-tight items-center'>
                <span className='text-[#6F3081] text-[18px] font-[700]'>Contact Us</span>

                {/* <div className='flex items-end gap-1'>
                    <span className='text-[#14142b] text-center text-[38px] font-[700]'> </span>
                    <span className='pl-2 h-[8px] mb-[10px]  rounded-full bg-[#6F3081]'></span>
                </div> */}

                <div className='flex items-center'>

                    <span className='text-[#14142b] uppercase sm:text-[38px] text-[30px] text-center leading-tight font-[700]'>Lorem ipsum dolor sit amet <i style={{ fontSize: "11px" }} className="fa fa-circle text-[#6F3081] mb-1" aria-hidden="true"></i></span>

                </div>


            </motion.div>
            <div className='lg:w-[55rem] w-full sm:px-10 px-3'>
                <Form />
            </div>
        </div>
    )
}

export default Contact
