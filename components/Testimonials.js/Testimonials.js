import React from 'react'
import { motion } from 'framer-motion'
import TestimonialBox from '../Helper/TestimonialBox'
const Testimonials = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex flex-col gap-16 m-auto md:py-2 py-20 md:px-32 px-5 h-[62pc]'>
            <div className='flex z-10 flex-col gap-3 '>
                <span className='text-[#6F3081] text-[18px] font-[700]'><i className="fa fa-minus mr-3" aria-hidden="true"></i>
                    Testimonials
                </span>
                <div className='flex flex-row items-end'>
                    <span className='text-[#14142b] text-[38px] leading-tight font-[700]'>WAT ONZE KLANTEN VINDEN </span>
                    <i style={{ fontSize: "7px" }} className="fa fa-circle text-[#6F3081] mb-2 ml-1" aria-hidden="true"></i>
                </div>
            </div>

            <div className='grid  grid-cols-2 gap-5 relative'>
                <div className=''>
                    <TestimonialBox heading={"THE GARRISON"} para={"Ik ben heel tevreden over de samenwerking. Ze hebben uitstekende kennis en zijn altijd bereikbaar voor vragen. Ik kan dan ook goed mijn ideeën en vragen kwijt. De persoonlijke aanpak, het tijd vrijmaken en aandachtig luisteren zijn voor mij grote pluspunten in de samenwerking."} name={"Ruben Vlier"} position={"CEO"} image={"/images/testimonial/testimonial1.png"} />
                </div>
                <div className='flex flex-1 flex-col gap-5 absolute w-[644px] right-0 top-[-120px] '>

                    <TestimonialBox heading={"RINSMA MODEPLEIN"} para={"De samenwerking met Chary heeft laten zien wat er mogelijk is voor Rinsma Modeplein. In een korte tijd hebben ze ongekende omzetten weten te realiseren."} name={"Anna Rinsma"} position={"CMO"} image={"/images/testimonial/testimonial2.png"} />


                    <TestimonialBox heading={"OLETTI"} para={"Chary is voor ons als interieur webwinkel een perfecte sparringpartner in online marketing. Persoonlijk, jong, dynamisch en met veel kennis in pacht. Chary heeft ons geholpen met het opzetten van een online marketingstrategie en helpt ons in de uitwerking ervan. Kort na het eerste contactmoment was de livegang van onze eerste campagne een feit. Dank Ryan en team! We zijn erg blij met onze samenwerking en de resultaten."} name={"Michiel van de Water"} position={"Founder & Business Developer at Oletti"} image={"/images/testimonial/testimonial3.png"} />

                </div>
            </div>
        </motion.div>
    )
}

export default Testimonials
