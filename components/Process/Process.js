import React from 'react';
import { motion } from 'framer-motion';
import ProcessBox from '../Helper/ProcessBox';

const Process = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='flex xl:flex-row flex-col gap-16 md:justify-between m-auto md:py-8 xl:px-14  xl:max-w-[87rem] px-5 relative'
    >
      <div className='flex z-10 flex-col gap-3  xl:sticky xl:h-full top-32 xl:w-[530px] w-full '>
        <span className='text-[#6F3081] text-[18px] font-[700]'>
          <i className='fa fa-minus mr-3' aria-hidden='true'></i>
          Our Approach
        </span>

        <div>
          <span className='text-[#14142b] sm:text-[38px] text-[28px] leading-tight font-[700]'>
            CLARIFYING AMBITIOUS GOALS REQUIRES A CLEAR STEP-BY-STEP PLAN
            <i
              style={{ fontSize: '11px' }}
              className='fa fa-circle text-[#6F3081] mb-1'
              aria-hidden='true'
            ></i>
          </span>
        </div>

        <span className='text-[18px] text-[#6e7191]'>
          Our four-step approach forms the cornerstone of every collaboration.
        </span>
      </div>

      <img
        style={{
          top: '18%',
          mixBlendMode: 'multiply',
          left: '27%',
          width: '55%',
          filter: 'blur(5px)',
        }}
        src='/images/blur.jpg'
        alt='blur'
        className='absolute z-0 xl:block hidden '
      />

      {/* <div className={`absolute z-0 w-52 h-52 top-[650px] xl:block hidden left-[420px] bg-gradient-to-br from-[#6F3081] to-[#B2DEFD] blur-[150px] rounded-full`} /> */}

      <div className='grid z-10 grid-cols-1 gap-5 flex-1 xl:px-12'>
        <ProcessBox
          image={'/svgs/svg.svg'}
          heading={'1. Introduction and Assessment'}
          para={
            'Through our introductory process, we work together to assess the current status of your marketing ecosystem. By conducting a comprehensive audit of all relevant marketing channels, we can outline a complete strategy and roadmap even before entering into a partnership.'
          }
        />
        <ProcessBox
          image={'/svgs/svg1.svg'}
          heading={'2. Technical Analysis'}
          para={
            'We initiate our collaboration with a technical analysis to determine whether Pixels, Tags, and Tracking configurations are correctly set up. If any issues arise or there is room for improvement, such as server-side tracking, we will address and implement them immediately. '
          }
        />

        <ProcessBox
          image={'/svgs/svg2.svg'}
          heading={'3. Strategy Development'}
          para={
            'Once all data can be accurately measured, we shift our focus to developing the strategy, typically starting with an extensive testing phase. From sub-audiences to messaging for each stage of the customer journey, every variable is considered, allowing us to work with the most current and relevant data.'
          }
        />
        <ProcessBox
          image={'/svgs/svg3.svg'}
          heading={'4. Monitoring and Scaling'}
          para={
            'Continuously monitoring and optimizing campaigns is the final step in this process. If the results are positive, we move forward with scaling. Based on comprehensive reports, we provide ongoing advice to take the next steps.'
          }
        />
      </div>
    </motion.div>
  );
};

export default Process;
