const InfoCard = ({ imgURL, label, info}) => {
    return (
        <div className='flex bg-pale-blue flex-1 flex-col w-full max-sm:w-full sm:border gap-5 sm:border-gray rounded-[16px]'>
            <div className= "mt-5 flex item-center justify-center"> 
                <img src={imgURL} className='w-[258px] h-[145px]' />
            </div>
            <h3 className='text-xl leading-normal font-semibold text-raveum-blue font-palanquin px-5'>
            {label}
            </h3>
            <p className='px-5 pb-5 font-montserrat text-xl leading-normal'>
            {info}
            </p>
        </div>
        
    );
}


export default InfoCard