// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { newsletter } from "../assets";
import vex from "vex-js";
import "vex-js/dist/css/vex.css";
import "vex-js/dist/css/vex-theme-default.css";
import "vex-js/dist/css/vex-theme-wireframe.css";

// Initialize Vex
vex.defaultOptions.className = "vex-theme-wireframe";

const Newsletter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUpClick = () => {
    // Clear the input fields
    setFullName("");
    setEmail("");

    // Show thank you message
    vex.dialog.alert("Thank you for signing up for The Raveum Newsletter");
  };

  return (
    <section className="flex justify-center bg-[#F8F7FC] items-center max-xl:flex-col-reverse gap-4 w-full max-w-[1062px] mx-auto overflow-hidden">
      <div className="flex-1 md:flex justify-center hidden">
        <img
          src={newsletter}
          alt="Newsletter Promotion"
          width={694}
          height={463}
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-5 mt-2 sm:mt-4">
        <h2 className="text-3xl sm:text-[32px] font-josefin font-semibold">
          Feel ready to invest yet?
        </h2>
        <p className="mt-4 font-nunito text-sm sm:text-base pr-4">
          Our expert team will deliver valuable insights, property
          recommendations, and exclusive access to new listings straight to your
          inbox. Sign up now and be the first to know about the best properties
          on the market.
        </p>
        <div className="flex flex-col py-2 px-3 sm:px-0 sm:pr-5 sm:py-3 w-full mt-4">
          <div className="flex flex-col gap-y-3 sm:flex-row flex-grow space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
            <div className="flex flex-col flex-grow">
              <label
                htmlFor="fullName"
                className="text-sm font-nunito font-semibold mb-1 text-left"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Please enter your full name"
                value={fullName} // Use state for value
                onChange={handleFullNameChange} // Update state on change
                className="bg-white py-3 pl-2 text-xs rounded-md focus:outline-none focus:ring-0 focus:border-slate-300 w-full"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label
                htmlFor="email"
                className="text-sm font-nunito font-semibold mb-1 text-left"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Please enter your email"
                value={email} // Use state for value
                onChange={handleEmailChange} // Update state on change
                className="bg-white py-3 pl-2 text-xs rounded-md focus:outline-none focus:ring-0 focus:border-slate-300 w-full"
              />
            </div>
          </div>
          <div className="flex w-1/3 mt-2">
            <button
              className="flex justify-center items-center px-2 sm:px-5 h-9 sm:h-10 bg-raveum-lightblue hover:bg-raveum-blue rounded-md transition duration-150 ease-in-out text-white text-xs sm:text-sm w-full mb-4 sm:mb-0"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
