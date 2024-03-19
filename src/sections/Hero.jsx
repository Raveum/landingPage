// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { heroRight, searchImg, mbHero } from '../assets'
import vex from 'vex-js';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-default.css';
import 'vex-js/dist/css/vex-theme-wireframe.css';

// Initialize Vex
vex.defaultOptions.className = 'vex-theme-wireframe';

const Hero = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            openSignUpForm(e);
            setInputValue('');
        }
    };

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

    return (
        <section className="w-full flex xl:flex-row flex-col sm:pt-6 justify-center gap-4 max-container mx-auto ">
            <img
                src={mbHero}
                alt="Mobile Hero"
                className="block sm:hidden w-full h-auto px-0 pt-6"
                style={{maxWidth: '100vw', height: 'auto'}}
            />
            <div className="relative xl:w-2/4 sm:pt-10 flex flex-col items-center sm:items-start w-full px-4 sm:px-8">
                <h1 className="mt-3 sm:mt-10 font-josefin text-[32px] sm:text-[56px] font-semibold text-center sm:text-left"> 
                    <span>Navigating the Real </span> 
                    <br/>
                    <span>Estate Market with</span>
                    <br/>
                    <span>Confidence</span>
                </h1>
                <p className="font-nunito text-sm sm:text-lg sm:leading-8 mt-3 mb-6 px-4 sm:px-0 sm:mr-10 text-center sm:text-left">
                    Raveum helps you improve your investment spending into property businesses that adapt to the market situation. Raveum helps you improve your investment spending into property businesses that adapt to the business.
                </p>

                <div className="flex items-center py-2 px-3 sm:py-3 sm:px-4 border border-slate-300 rounded-md w-full">
                    <input 
                        type="text"
                        placeholder="Search by properties, portfolio or location"
                        className="bg-white py-1 pl-8 pr-3 sm:py-2 sm:pl-10 text-xs sm:text-sm rounded-md w-full h-[28px] sm:h-[30px] flex-grow focus:outline-none focus:ring-0 focus:border-slate-300"
                        style={{backgroundImage: `url(${searchImg})`, backgroundPosition: 'left 10px center', backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat'}}
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="flex justify-center items-center px-2 sm:px-5 h-7 sm:h-8 bg-raveum-lightblue hover:bg-raveum-blue rounded-md transition duration-150 ease-in-out text-white text-xs sm:text-sm ml-2" onClick={openSignUpForm}>
                        Search
                    </button>
                </div>
            </div>
            <div className='relative flex-1 max-lg:hidden flex justify-center pt-5 items-start'>
                <img
                src={heroRight}
                alt='Property colletion'
                width={520}
                height={582}
                className='object-contain relative z-10'
                />
            </div>
        </section>
    )
}

export default Hero