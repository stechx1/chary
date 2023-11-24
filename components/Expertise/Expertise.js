import React from 'react';
import { motion } from 'framer-motion';
import ExpertiseBox from '../Helper/ExpertiseBox';
import json1 from '../../public/animation/anim1.json';
import json2 from '../../public/animation/anim2.json';
import json3 from '../../public/animation/anim3.json';

const Expertise = ({scrollToContact}) => {
  return (
    <div className='md:max-w-[87rem] m-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className='flex flex-col gap-4 leading-tight items-center'
      >
        <span className='text-[#6F3081] text-[18px] font-[700]'>
          Our Expertise
        </span>

        {/* <div className='flex items-end gap-1'>
                    <span className='text-[#14142b] text-center text-[38px] font-[700]'> </span>
                    <span className='pl-2 h-[8px] mb-[10px]  rounded-full bg-[#6F3081]'></span>
                </div> */}

        <div className='flex items-center'>
          <span className='text-[#14142b] sm:text-[38px] text-[30px] text-center leading-tight font-[700]'>
            E-COMMERCE MARKETING SERVICES{' '}
            <i
              style={{ fontSize: '11px' }}
              className='fa fa-circle text-[#6F3081] mb-1'
              aria-hidden='true'
            ></i>
          </span>
        </div>
      </motion.div>

      <div className='flex mt-12 justify-center'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 xl:px-20 px-5'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
          >
            <ExpertiseBox scrollToContact={scrollToContact}
              json={json1}
              heading={'PAID ADVERTISING'}
              para={
                'online advertising, the way to reach your target group, regardless of who they are or where they are.'
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
          >
            <ExpertiseBox scrollToContact={scrollToContact}
              json={json2}
              heading={'DATA & ANALYTICS'}
              para={
                'Data, the key to more insights and optimizing your business processes. Convert your data into value.'
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}
          >
            <ExpertiseBox scrollToContact={scrollToContact}
              json={json3}
              heading={'MARKETING AUTOMATION'}
              para={
                'Marketing Automation gets more out of existing traffic and customers by using intelligent Flows and Campaigns.'
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
