import React, { useRef } from 'react';
import Slider from 'react-slick';
import { raveuminfo } from '../constants';
import InfoCard from '../components/InfoCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Raveum101 = () => {
    const sliderRef = useRef(null);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="flex items-center text-4xl text-raveum-blue font-palanquin font-semibold">
                    Raveum 101
                </h2>
                <p className="info-text">Learn more about Raveum and what you can do using it</p>
            </div>
            <div className="relative mt-16">
                <Slider ref={sliderRef} {...settings}>
                    {raveuminfo.map((card) => (
                        <div key={card.label} className="px-2">
                            <InfoCard {...card} />
                        </div>
                    ))}
                </Slider>
                {/* Optionally add custom navigation arrows */}
                <button 
                    className="absolute left-0 z-10 bg-white bg-opacity-50 p-2" 
                    onClick={() => sliderRef.current.slickPrev()}>
                    Previous
                </button>
                <button 
                    className="absolute right-0 z-10 bg-white bg-opacity-50 p-2" 
                    onClick={() => sliderRef.current.slickNext()}>
                    Next
                </button>
            </div>
        </section>
    );
}

export default Raveum101;
