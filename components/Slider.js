import React from 'react'
import Sliders from "react-slick";

const Slider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slideToScroll: 1,
        swipeToSlide: false,
        autoplay: true,
        speed: 2400,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
    
      };
    return (
        <div className="container" style={{ filter: 'grayscale(1)' }}>

            <Sliders {...settings}>
                <div>
                    <img src="/slider/img.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img1.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img2.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img3.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img3.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img1.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img2.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img3.png" alt="logo" className='w-1/2' />
                </div>
                <div>
                    <img src="/slider/img.png" alt="logo" className='w-1/2' />
                </div>
            </Sliders>
        </div>
    )
}

export default Slider
