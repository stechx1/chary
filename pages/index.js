import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <div>
      <Hero />
      <div className='my-10 bg-white p-14'>
        <Slider />
      </div>
    </div>
  )
}
