import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import Slider from '@/components/Slider'
import { motion } from 'framer-motion'
import ResultBox from '@/components/Helper/ResultBox'
import Expertise from '@/components/Expertise/Expertise'
import Process from '@/components/Process/Process'
import ProcessFooter from '@/components/Process/ProcessFooter'
import Testimonials from '@/components/Testimonials.js/Testimonials'


export default function Home() {
  return (
    <>
      <Hero />
      <div className='my-24 bg-white py-7'>
        <Slider />
      </div>

      <div className="my-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-center text-[22px] text-[#14142b]"
        >
          Onze resultaten gemeten in cijfers
        </motion.span>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 xl:px-32 px-10 my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
        >
          <ResultBox number={'48'} heading={'Happy Clients'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
        >
          <ResultBox number={'13.6m'} heading={'Revenue Generated'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.4 }}
        >
          <ResultBox number={'2.5m'} heading={'Ad Budget Spent'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
        >
          <ResultBox number={'6.3'} heading={'Average ROAS'} />
        </motion.div>
      </div>

      <div className='my-32'>
        <Expertise />
      </div>

      <div className='sm:my-36'>
        <Process />
      </div>

      <div className=' xl:px-32 sm:p-16 p-5 my-10'>
        <ProcessFooter />
      </div>

      <div className=' sm:mt-36 mt-20'>
        <Testimonials />
      </div>

      <div className='mt-52'>
        
      </div>

    </>
  )
}
