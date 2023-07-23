import React from 'react'
import { motion } from 'framer-motion'
import ProcessBox from '../Helper/ProcessBox'

const Process = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }} className='flex xl:flex-row flex-col gap-16 md:justify-between m-auto md:py-8 xl:px-14  xl:max-w-[87rem] px-5 relative'>
      <div className='flex z-10 flex-col gap-3  xl:sticky xl:h-full top-32 xl:w-[530px] w-full '>
        <span className='text-[#6F3081] text-[18px] font-[700]'><i className="fa fa-minus mr-3" aria-hidden="true"></i>
          Our Process</span>

        <div>

          <span className='text-[#14142b] sm:text-[38px] text-[28px] leading-tight font-[700]'>OM AMBITIEUZE DOELSTELLINGEN TE BEREIKEN IS EEN DUIDELIJK STAPPENPLAN NODIG <i style={{ fontSize: "11px" }} className="fa fa-circle text-[#6F3081] mb-1" aria-hidden="true"></i></span>

        </div>

        <span className='text-[18px] text-[#6e7191]'>Ons 4-delige stappenplan vormt de fundering van iedere samenwerking.</span>
      </div>

      <img style={{ "top": "18%", "mixBlendMode": "multiply", "left": "27%", "width": "55%", "filter": "blur(5px)", }} src="/images/blur.jpg" alt="blur" className='absolute z-0 xl:block hidden ' />

      {/* <div className={`absolute z-0 w-52 h-52 top-[650px] xl:block hidden left-[420px] bg-gradient-to-br from-[#6F3081] to-[#B2DEFD] blur-[150px] rounded-full`} /> */}




      <div className='grid z-10 grid-cols-1 gap-5 flex-1 xl:px-12'>
        <ProcessBox image={"/svgs/svg.svg"} heading={"1. KENNISMAKING EN BEOORDELING"} para={"Aan de hand van ons kennismakingstraject brengen wij samen met jou in beeld wat de huidige status is van jouw marketing ecosysteem. Door het afnemen van een uitgebreide audit over alle desbetreffende marketing kanalen zijn wij in staat een volledige strategie en de road map hiervan uit te tekenen al voordat wij een samenwerking aangaan."} />
        <ProcessBox image={"/svgs/svg1.svg"} heading={"2. TECHNISCHE ANALYSE"} para={"We starten de samenwerking met een technische analyse om te bepalen of de Pixels, Tags en Tracking configuratie naar behoren staan ingesteld. Wanneer dit niet het geval is of er ligt ruimte voor verbetering zoals bijvoorbeeld server side tracking dan zal dit direct worden overlegd en worden geïmplementeerd."} />


        <ProcessBox image={"/svgs/svg2.svg"} heading={"3. STRATEGIE UITWERKING"} para={"Wanneer alle data goed doorgemeten kan worden zal de focus worden gelegd op het uitwerken van de strategie welke doorgaans begint met een uitgebreide testperiode. Van sub-doelgroepen tot teksten voor iedere fase van de customer journey, ieder variabel wordt hierin meegenomen zodat we met de meest recente en relevante data te werk kunnen gaan."} />
        <ProcessBox image={"/svgs/svg3.svg"} heading={"4. MONITOREN EN OPSCHALEN"} para={"Het constant monitoren en optimaliseren van campagnes is het sluitstuk van dit stappenplan. Zijn de resultaten positief? Dan gaan we opschalen. Aan de hand van uitgebreide rapporten leveren wij continu advies om de volgende stap te zetten."} />
      </div>
    </motion.div>
  )
}

export default Process
