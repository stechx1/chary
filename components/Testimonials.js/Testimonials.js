import React from 'react';
import { motion } from 'framer-motion';
import TestimonialBox from '../Helper/TestimonialBox';
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='flex xl:flex-row xl:max-w-[87rem] flex-col xl:gap-7 m-auto md:py-2 px-10'
    >
      <div className='flex z-10 flex-col gap-3 flex-1 '>
        <span className='text-[#6F3081] text-[18px] font-[700]'>
          <i className='fa fa-minus mr-3' aria-hidden='true'></i>
          Testimonials
        </span>

        <div className=''>
          <span className='text-[#14142b] sm:text-[38px] text-[30px] leading-tight font-[700]'>
            WHAT OUR CUSTOMERS THINK
            <i
              style={{ fontSize: '11px' }}
              className='fa fa-circle text-[#6F3081] mb-1'
              aria-hidden='true'
            ></i>
          </span>
        </div>
        <div className='my-10'>
          <TestimonialBox
            heading={'THE GARRISON'}
            para={
              'I am very satisfied with the collaboration. I really liked working with them. They have excellent knowledge and are always available for questions. I can express my ideas and questions very well. The personal approach, making time and listening attentively are great pluses for me in the cooperation.'
            }
            name={'Ruben Vlier'}
            position={'CEO'}
            image={'/images/testimonial/testimonial1.png'}
          />
        </div>
      </div>

      <div className='flex flex-col flex-1 gap-5'>
        <div className=''>
          <TestimonialBox
            heading={'RINSMA MODEPLEIN'}
            para={
              'The cooperation with Chary has shown what is possible for Rinsma Modeplein. In a short time they have managed to achieve unprecedented sales.'
            }
            name={'Anna Rinsma'}
            position={'CMO'}
            image={'/images/testimonial/testimonial2.png'}
          />
        </div>

        <div>
          <TestimonialBox
            heading={'OLETTI'}
            para={
              'Chary is a perfect sparring partner in online marketing for us as an interior store. Personal, young, dynamic and knowledgeable. Chary has helped us to set up an online marketing strategy and helps us in its implementation. Shortly after the first moment of contact, our first campaign went live. Thank you Ryan and team! We are very happy with our cooperation and the results.'
            }
            name={'Michiel van de Water'}
            position={'Founder & Business Developer at Oletti'}
            image={'/images/testimonial/testimonial3.png'}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
