import React from 'react'

const ProcessBox = ({image, heading, para}) => {
    return (
        <div style={{boxShadow:"0 6px 12px rgba(20,20,43,.05)"}} className='flex sm:flex-row flex-col py-[42px] px-[32px] bg-white rounded-[40px] border border-[#eff0f6] gap-5 '>
            <div className='p-4 flex items-center bg-[#6F3081] min-h-[100px] h-[100px] rounded-3xl w-[100px] min-w-[100px]'>
                <img src={image} alt="logo" className='w-fit' />
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='sm:text-[26px] text-[20px] font-bold text-[#14142b]'>{heading}</h1>
                <p className='text-[18px] text-[#6e7191]'>{para}</p>
            </div>
        </div>
    )
}

export default ProcessBox
