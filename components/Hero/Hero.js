import React from 'react';
import Lottie from 'react-lottie-player';
import json from '../../public/animation/anim4.json';
const Hero = ({scrollToContact}) => {
  return (
    <>
      <div className='relative lg:z-[-1] z-10 md:flex gap-5 md:justify-between md:max-w-7xl m-auto md:pt-20 py-4 md:px-20 px-5'>
        <div className='flex relative flex-col gap-5 '>
          <div className='mr-20 flex absolute z-[-1] top-[-8%] right-[-25%] lg:hidden'>
            <Lottie
              loop={true}
              autoPlay={true}
              animationData={json}
              play
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className='flex flex-col leading-tight lg:z-[-1] z-10  '>
            <h1 className='font-extrabold lg:text-[64px] text-[54px] text-[#14142b]'>
              WE MAKE
            </h1>

            <div className='flex items-center'>
              <span className='text-[#14142b] font-extrabold lg:text-[64px] text-[54px] leading-tight'>
                ADS WORK{' '}
                <i
                  style={{ fontSize: '11px' }}
                  className='fa fa-circle text-[#6F3081] mb-1'
                  aria-hidden='true'
                ></i>
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-8 lg:z-[-1] z-10 '>
            <span className='text-[#4e4b66] text-[18px] max-w-[515px]'>
            Globalone is an E-Commerce Marketing Agency that excels in creating, implementing, and assessing (omni) channel marketing strategies.
            </span>
            <span className='text-[#4e4b66] text-[18px] max-w-[515px]'>
            Since our start in 2021, we've been devoted to delivering top-tier quality in the fast-paced and highly competitive E-Commerce landscape.
            </span>
          </div>
        </div>

        <div className='pr-20 hidden top-10 right-0 lg:flex'>
          <Lottie
            loop={true}
            autoPlay={true}
            animationData={json}
            play
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
      <div onClick={scrollToContact} className='flex  z-10 md:max-w-7xl m-auto md:px-20 px-5 '>
        <div className='relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#6F3081] py-7 px-14 flex items-center rounded-full font-bold'>
          <span className='z-10'>
            {' '}
            Contact Us
            <i
              className='fa fa-arrow-right text-white pl-2'
              aria-hidden='true'
            ></i>
          </span>
          <div className='absolute rounded-full opacity-20 left-[-42px] top-[-128%] bg-[#fcd0e6] z-0 w-40 h-40 ' />
          <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
        </div>
      </div>
    </>
  );
};

export default Hero;
