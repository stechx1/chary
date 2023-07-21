import React from 'react'
import { motion } from 'framer-motion'
import TestimonialBox from '../Helper/TestimonialBox'
const Testimonials = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex xl:flex-row flex-col xl:gap-7 m-auto md:py-2 md:px-36 px-5'>
            <div className='flex z-10 flex-col gap-3 flex-1 '>
                <span className='text-[#6F3081] text-[18px] font-[700]'><i className="fa fa-minus mr-3" aria-hidden="true"></i>
                    Testimonials
                </span>
                

                <div className=''>

                    <span className='text-[#14142b] sm:text-[38px] text-[30px] leading-tight font-[700]'>WAT ONZE KLANTEN VINDEN  <i style={{ fontSize: "11px" }} className="fa fa-circle text-[#6F3081] mb-1" aria-hidden="true"></i></span>

                </div>
                <div className='my-10'>
                    <TestimonialBox heading={"THE GARRISON"} para={"Ik ben heel tevreden over de samenwerking. Ze hebben uitstekende kennis en zijn altijd bereikbaar voor vragen. Ik kan dan ook goed mijn ideeën en vragen kwijt. De persoonlijke aanpak, het tijd vrijmaken en aandachtig luisteren zijn voor mij grote pluspunten in de samenwerking."} name={"Ruben Vlier"} position={"CEO"} image={"/images/testimonial/testimonial1.png"} />
                </div>
            </div>

            <div className='flex flex-col flex-1 gap-5'>

                <div className=''>

                    <TestimonialBox heading={"RINSMA MODEPLEIN"} para={"De samenwerking met Chary heeft laten zien wat er mogelijk is voor Rinsma Modeplein. In een korte tijd hebben ze ongekende omzetten weten te realiseren."} name={"Anna Rinsma"} position={"CMO"} image={"/images/testimonial/testimonial2.png"} />




                </div>

                <div>
                    <TestimonialBox heading={"OLETTI"} para={"Chary is voor ons als interieur webwinkel een perfecte sparringpartner in online marketing. Persoonlijk, jong, dynamisch en met veel kennis in pacht. Chary heeft ons geholpen met het opzetten van een online marketingstrategie en helpt ons in de uitwerking ervan. Kort na het eerste contactmoment was de livegang van onze eerste campagne een feit. Dank Ryan en team! We zijn erg blij met onze samenwerking en de resultaten."} name={"Michiel van de Water"} position={"Founder & Business Developer at Oletti"} image={"/images/testimonial/testimonial3.png"} />
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonials
