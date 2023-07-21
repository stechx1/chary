import React from 'react'
import { motion } from 'framer-motion'
import ExpertiseBox from '../Helper/ExpertiseBox'
import json1 from '../../public/animation/anim1.json'
import json2 from '../../public/animation/anim2.json'
import json3 from '../../public/animation/anim3.json'

const Expertise = () => {
    return (
        <div>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex flex-col gap-4 leading-tight items-center'>
                <span className='text-[#6F3081] text-[18px] font-[700]'>Our Expertise</span>

                <div className='flex items-end gap-1'>
                    <span className='text-[#14142b] text-center text-[38px] font-[700]'>E-COMMERCE MARKETING SERVICES </span>
                    <span className='pl-2 h-[8px] mb-[10px]  rounded-full bg-[#6F3081]'></span>
                </div>
            </motion.div>

            <div className='flex mt-12 justify-center'>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 xl:px-20 px-5'>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}>
                        <ExpertiseBox json={json1} heading={'PAID ADVERTISING'} para={"nline adverteren, de manier om jouw doelgroep te bereiken, ongeacht wie zij zijn of waar zij zich bevinden."} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}>
                        <ExpertiseBox json={json2} heading={"DATA & ANALYTICS"} para={"Data, de sleutel tot meer inzichten en het optimaliseren van jouw bedrijfsprocessen. Zet jouw data om in waarde."} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }}>
                        <ExpertiseBox json={json3} heading={"MARKETING AUTOMATION"} para={"Marketing Automatisatie haalt meer uit bestaand verkeer en klanten door intelligente Flows en Campagnes in te zentten."} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
