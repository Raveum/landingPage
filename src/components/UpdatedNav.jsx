// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { navLinks } from "../constants";
import vex from 'vex-js';
import vexDialog from 'vex-dialog';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-default.css';
import 'vex-js/dist/css/vex-theme-wireframe.css';
import { headerLogo, hamburger, searchImg } from '../assets'

// Initialize Vex
vex.registerPlugin(vexDialog);
vex.defaultOptions.className = 'vex-theme-wireframe';

const Nav = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleNavLinkClick(e);
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

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        openSignUpForm();
    };

    const handleHamburgerClick = () => {
        const navContent = navLinks.map(item => 
            `<a href="#" style="display:block; margin-bottom: 10px;" class="popup-nav-link">${item.label}</a>`
        ).join('');

        const popup = vex.dialog.open({
            unsafeMessage: `<div style="text-align: center;">${navContent}</div>`,
            buttons: [Object.assign({}, vex.dialog.buttons.NO, { text: 'Close' })],
            afterOpen: (content) => {
                const links = content.querySelectorAll('.popup-nav-link');
                links.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        vex.close(popup.data.vex.id); // Close the current popup
                        openSignUpForm(); // Then open the sign-up form
                    });
                });
            },
            // Ensure to cleanup after closing the popup
            afterClose: () => {
                const links = document.querySelectorAll('.popup-nav-link');
                links.forEach(link => {
                    link.removeEventListener('click', handleNavLinkClick);
                });
            }
        });
    };
    return (
        <header className="padding-x py-8 absolute z-10 w-full shadow-md">
            <nav className="flex justify-between gap-10 items-center max-container">
                <a href="/">
                    <img
                        src = {headerLogo}
                        alt = "Logo"
                        width = {180}
                        height = {50}
                    />
                </a>
                <div className="flex items-center p-2 sm:border bg-[#eaefff] rounded-md max-lg:hidden mr-28">
                    <div className="flex justify-center items-center w-8 h-8">
                        <img src={searchImg} alt="Search" className="w-5 h-5"/>
                    </div>  
                    <input 
                        type="text"
                        placeholder="Search by properties, portfolio or location"
                        className="input py-2 bg-[#eaefff] px-4 rounded-md w-[350px]"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="flex justify-center items-center w-12 h-10 bg-[#002699] hover:bg-raveum-blue rounded-md transition duration-150 ease-in-out" onClick={handleNavLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
                <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-josefin leading-normal text-base text-slate-black hover:text-slate-gray transition-colors duration-300 ease-in-out'
                                onClick={handleNavLinkClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex text-base leading-normal font-medium font-josefin max-lg:hidden '>
                    <button className="flex justify-center items-center px-5 h-10 bg-raveum-lightblue hover:bg-raveum-blue rounded-md transition duration-150 ease-in-out text-white" onClick={handleNavLinkClick}>
                        Login
                    </button>
                </div>
                <div className='hidden max-lg:block' onClick={handleHamburgerClick}>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25} style={{ cursor: 'pointer' }} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
