// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { heroRight, searchImg } from '../assets'
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
        <section className="w-full flex xl:flex-row flex-col pt-6 justify-center gap-4 max-container mx-auto ">
            <div className="relative xl:w-2/4 pt-10 flex flex-col items-start w-full px-4 sm:px-8">
                <h1 className= "mt-10 font-josefin text-[56px] font-semibold"> 
                    <span>Navigating the Real </span> 
                    <br/>
                    <span>Estate Market with</span>
                    <br/>
                    <span>Confidence</span>
                </h1>
                <p className = "font-nunito text-lg leading-8 mt-6 mb-6 sm:max-w-base mr-10">
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