// eslint-disable-next-line no-unused-vars
import React from 'react';
import { newsletter } from '../assets';
import vex from 'vex-js';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-default.css';
import 'vex-js/dist/css/vex-theme-wireframe.css';

// Initialize Vex
vex.defaultOptions.className = 'vex-theme-wireframe';
const Newsletter = () => {

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
        <section className="flex justify-center items-center flex-col min-h-screen max-container">
            <div className="w-full max-w-[1062px] h-[520px] bg-[#F8F7FC] flex">
                <div className="flex-1 md:flex justify-center items-center hidden">
                    <img src={newsletter} alt="Newsletter" className="w-[694px] h-[463px]"/>
                </div>                
                <div className="flex-1 flex flex-col justify-center items-start text-left p-8 gap-5">
                    <h2 className="text-2xl sm:text-3xl font-palanquin font-bold">Feel ready to invest yet?</h2>
                    <p className="font-montserrat text-xl sm:text-base leading-8 mt-6 mb-6 sm:max-w-base">
                        Our expert team will deliver valuable insights, property recommendations, and exclusive access to new listings straight to your inbox. Sign up now and be the first to know about the best properties on the market.
                    </p>
                    <div id="Newsletter">
                        <h2 className="text-xl sm:text-2xl font-palanquin font-bold underline"
                        onClick={openSignUpForm} >Subscribe to our Newsletter</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;

