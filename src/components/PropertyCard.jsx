import { star } from '../assets'

const PropertyCard = ({ imgURL, label, info, stars}) => {
    return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full sm:border sm:border-gray rounded-[16px] gap-4'>
        <img src={imgURL} className='w-full' />
        <h3 className='text-2xl leading-normal font-semibold font-palanquin px-2'>
          {label}
        </h3>
        <p className='font-semibold font-montserrat text-xl px-2 leading-normal'>
          {info}
        </p>

        <div className=' flex justify-start gap-2.5 px-2 pb-2'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          {stars}
        </p>
      </div>

      </div>
    );
}


export default PropertyCard