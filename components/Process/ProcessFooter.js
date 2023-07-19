import React from 'react'

const ProcessFooter = () => {
    return (
        <div className='flex xl:flex-row flex-col justify-between gap-20 cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px]  bg-[#6F3081] xl:p-20 p-10 rounded-[50px]'>
            <h1 className=' xl:w-2/3 text-[32px] font-bold text-white'>KLAAR OM DE VOLGENDE STAP VOOR JOUW BEDRIJF TE MAKEN?</h1>
            <div className='flex-1'>
                <div className='relative  cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-[#6F3081] bg-[white] py-7 px-14 flex items-center rounded-full font-bold w-fit'>
                    <span className='z-10'> Plan een Gesprek
                        <i className="fa fa-arrow-right text-[#6F3081] pl-2" aria-hidden="true"></i>
                    </span>
                    <div className='absolute rounded-full opacity-20 left-[-42px] top-[-128%] bg-[#fcd0e6] z-0 w-40 h-40 ' />
                    <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
                </div>
            </div>
        </div>
    )
}

export default ProcessFooter