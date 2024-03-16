// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { properties } from '../constants';
import PropertyCard from '../components/PropertyCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import vex from 'vex-js';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-default.css';
import 'vex-js/dist/css/vex-theme-wireframe.css';

// Initialize Vex
vex.defaultOptions.className = 'vex-theme-wireframe';

const Trending = () => {

    const openSignUpForm = () => {
        vex.dialog.open({
            message: 'Sign up for our waitlist',
            input: [
                '<input name="email" type="email" placeholder="Email" required />',
                '<input name="number" type="text" placeholder="Number" required />',
                '<input name="firstName" type="text" placeholder="First Name" required />',
                '<input name="lastName" type="text" placeholder="Last Name" required />'
            ].join(''),
            buttons: [
                Object.assign(vex.dialog.buttons.YES, { text: 'Join' }),
                Object.assign(vex.dialog.buttons.NO, { text: 'Cancel' })
            ],
            callback: function (data) {
                if (!data) {
                    console.log('Cancelled');
                } else {
                    console.log('Submitted Data:', data);
                    // Here you would handle the form submission.
                }
            }
        });
    };

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
                <h2 className="flex items-center text-3xl font-palanquin font-semibold">
                    <span>Trending Properties</span>
                    <span className="ml-auto text-raveum-blue text-xl" onClick={openSignUpForm}>Explore Raveum </span>
                </h2>
            </div>

            <div className="relative mt-16">
                <Slider ref={sliderRef} {...settings}>
                    {properties.map((property) => (
                        <div key={property.label} className="px-2">
                            <PropertyCard {...property} />
                        </div>
                    ))}
                </Slider>
                {/* Custom navigation buttons */}
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

export default Trending;
