import { star } from '../assets'

const PropertyCard = ({ imgURL, imgPop, imgRating, heartTrue, heartFalse, label, location, pricing, capRate, shares, rentalYield}) => {
    return (
        <div className='relative flex flex-1 flex-col w-[308px] h-[390px] rounded-[16px] overflow-hidden'>
            {/* Background image with fixed dimensions */}
            <div style={{ width: '308px', height: '390px' }} className='absolute top-0 left-0 w-full h-full'>
                <img src={imgURL} className='w-full h-full object-cover' alt="Property" />
            </div>
            <div>
                <img src={imgPop} style={{ width: '87px', height: '50px' }} className='absolute top-4 left-0' alt="Popular" />
                <img src={imgRating} style={{ width: '36px', height: '36px' }} className='absolute top-4 right-0' alt="Popular" />
                <img src={heartTrue} style={{ width: '36px', height: '36px' }} className='absolute top-4 right-10' alt="Popular" />
            </div>
            
            {/* Overlay content */}
            <div className='relative p-2 flex flex-col justify-end h-full z-10'>
                <h3 className='text-2xl leading-normal font-semibold font-palanquin text-white'>
                    {label}
                </h3>
                <p className='font-semibold font-montserrat text-xl leading-normal text-white'>
                    {shares}
                </p>

            </div>

            {/* Semi-transparent Overlay for readability */}
            {/* <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div> */}
        </div>
    );
}

export default PropertyCard
