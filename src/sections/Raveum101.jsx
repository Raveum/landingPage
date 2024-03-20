import React, { useRef } from 'react';
import Slider from 'react-slick';
import { raveuminfo } from '../constants';
import InfoCard from '../components/InfoCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { arrowLeft, arrowRight1 } from '../assets';
 
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
                <h2 className="flex items-center justify-center text-2xl font-josefin font-bold">
                    Raveum 101
                </h2>
                <p className="font-nunito text-lg flex items-center justify-center text-[#374151]">Lorem ipsum dolor sit amet consectetur. Integer convallis congue quam ipsum cum.</p>
            </div>
            <div className="mt-12">
                <Slider ref={sliderRef} {...settings}>
                    {raveuminfo.map((card) => (
                        <div key={card.label} className="px-2 gap-4">
                            <InfoCard {...card} />
                        </div>
                    ))}
                </Slider>
                <div className="flex items-center justify-center mt-8">
                    <button 
                        className="mx-2 z-10 bg-white bg-opacity-50 p-2 flex items-center justify-center"
                        onClick={() => sliderRef.current.slickPrev()}>
                        <img src={arrowLeft} alt="Previous" className="w-4 h-4"/>
                    </button>
                    <button 
                        className="mx-2 z-10 bg-white bg-opacity-50 p-2 flex items-center justify-center"
                        onClick={() => sliderRef.current.slickNext()}>
                        <img src={arrowRight1} alt="Next" className="w-4 h-4"/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Raveum101;
