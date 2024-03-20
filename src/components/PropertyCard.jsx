import React, { useState } from 'react';


const PropertyCard = ({ imgURL, imgPop, imgRating, heartTrue, heartFalse, label, location, pricing, capRate, shares, rentalYield}) => {
  const [isLiked, setIsLiked] = useState(true); // starts as not liked, adjust as needed

    return (
        <div className='relative flex flex-1 flex-col w-full max-w-[308px] h-[390px] rounded-[16px] overflow-hidden'>
            {/* Background image with fixed dimensions */}
            <img src={imgURL} className='absolute top-0 left-0 w-full h-full object-cover' alt="Property" />

            <div>
              <img src={imgPop} style={{ width: '87px', height: '50px' }} className='absolute top-4 left-0' alt="Popular" />
              <img src={imgRating} style={{ width: '36px', height: '36px' }} className='absolute top-4 right-0' alt="Rating" />
              <img src={isLiked ? heartTrue : heartFalse} style={{ width: '36px', height: '36px', zIndex: 30 }} className='absolute top-4 right-10' alt="Heart" onClick={() => setIsLiked(!isLiked)} />
            </div>
            
            {/* Gradient Overlay */}
            <div className='absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent'></div>

            {/* Overlay content */}
            <div className='relative flex flex-col justify-end h-full z-20 p-2'>
              {/* Container for label, location, and pricing */}
              <div>
                  <div className='flex justify-between'>
                      {/* Left side content: label and location */}
                      <div className='flex flex-col'>
                          <h3 className='text-2xl font-semibold font-josefin text-white'>
                              {label}
                          </h3>
                          <p className='font-nunito font-light text-sm text-white'>
                              {location}
                          </p>
                      </div>

                      {/* Right side content: pricing */}
                      <p className='font-semibold font-montserrat mt-2 text-xl leading-normal text-white'>
                          {pricing}
                      </p>
                  </div>
              </div>

              {/* White background div directly below */}
              <div className="bg-white rounded-md px-5 py-2 w-full mt-2 flex justify-between">
                {/* Content block for Cap Rate */}
                <div className='flex text-center item-center flex-col'>
                  <h3 className='text-lg font-extrabold font-nunito text-raveum-blue'>
                    {capRate}
                  </h3>
                  <p className='font-nunito font-light text-xs'>
                    Cap Rate
                  </p>
                </div>
                
                {/* Content block for Shares Available */}
                <div className='flex text-center item-center flex-col'>
                <h3 className='text-lg font-extrabold font-nunito text-raveum-blue'>
                    {shares}
                  </h3>
                  <p className='font-nunito font-light text-xs'>
                    Shares Available
                  </p>
                </div>
                
                {/* Content block for Rental Yield */}
                <div className='flex text-center item-center flex-col'>
                <h3 className='text-lg font-extrabold font-nunito text-raveum-blue'>
                    {rentalYield}
                  </h3>
                  <p className='font-nunito font-light text-xs'>
                    Rental Yield
                  </p>
                </div>
            </div>

          </div>

            
            


            


        </div>
    );
}

export default PropertyCard
