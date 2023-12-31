import { useRef } from 'react';
import Hero from '@/components/Hero/Hero';
import Slider from '@/components/Slider';
import { motion } from 'framer-motion';
import ResultBox from '@/components/Helper/ResultBox';
import Expertise from '@/components/Expertise/Expertise';
import Process from '@/components/Process/Process';
import ProcessFooter from '@/components/Process/ProcessFooter';
import Testimonials from '@/components/Testimonials.js/Testimonials';
import Contact from '@/components/Contact/Contact';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const contactRef = useRef(null);
  const resultsRef = useRef(null);
  const expertiseRef = useRef(null);
  const approachRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOurResults = () => {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOurExpertise = () => {
    expertiseRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToApproach = () => {
    approachRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToContact={scrollToContact}
        scrollToOurResults={scrollToOurResults}
        scrollToOurExpertise={scrollToOurExpertise}
        scrollToApproach={scrollToApproach}
      />
      <Head>
        <title>Globalone | We make ads work</title>
      </Head>
      <Hero scrollToContact={scrollToContact} />
      <div className='my-24 bg-white py-7'>
        <Slider />
      </div>

      <div ref={resultsRef} className='my-10 flex flex-col items-center'>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='text-center text-[22px] text-[#14142b]'
        >
          Our results measured in numbers
        </motion.span>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 xl:px-32 px-10 my-8 xl:max-w-[87rem] m-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
        >
          <ResultBox number={'67'} heading={'Satisfied Clients'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
        >
          <ResultBox number={'$23,5m'} heading={'Revenue Generated'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.4 }}
        >
          <ResultBox number={'$5.1m'} heading={'Ad Budget Invested'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
        >
          <ResultBox number={'4.6'} heading={'Average ROAS'} />
        </motion.div>
      </div>

      <div ref={expertiseRef} className='my-32'>
        <Expertise scrollToContact={scrollToContact} />
      </div>

      <div ref={approachRef} className='sm:my-36'>
        <Process />
      </div>

      <div className=' xl:max-w-[87rem] m-auto sm:p-16 p-5 my-10'>
        <ProcessFooter scrollToContact={scrollToContact} />
      </div>

      <div className=' sm:mt-36 mt-20'>
        <Testimonials />
      </div>

      <div className='mt-52 pb-14'>
        <Contact contactRef={contactRef} />
      </div>
    </>
  );
}
