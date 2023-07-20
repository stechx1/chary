import React from 'react'

const TestimonialBox = ({image, heading, para, name, position}) => {
    return (
        <div style={{boxShadow:'0 6px 12px rgba(20,20,43,.05)'}} className='flex rounded-[40px] flex-col gap-5 p-10 bg-white border border-[eff0f6]'>
            <div>
                <img src={image} alt="testimonial" className='max-w-[150px]' />
            </div>

            <div className='flex flex-col gap-3'>

                <h3 className='text-[#14142b] text-[22px] font-semibold'>{heading}</h3>
                <span className='text-[#6e7191] text-[18px] mb-2'>{para}</span>

            </div>

            <div className='flex flex-col '>
                <span className='text-[#14142b] font-semibold text-[18px]'>{name}</span>
                <span className='text-[#6F3081] font-normal text-[18px]'>{position}</span>
            </div>

        </div>
    )
}

export default TestimonialBox
