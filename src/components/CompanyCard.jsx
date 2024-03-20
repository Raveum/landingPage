const CompanyCard = ({ imgURL, label, info}) => {
    return (
        <div className='flex flex-1 flex-col w-full rounded-[16px] gap-y-2'>
            <img src={imgURL} className='bg-blue-100/45 w-[370px] h-[300px]' />
            <h3 className='text-lg mt-2 leading-normal font-semibold text-raveum-blue font-josefin'>
            {label}
            </h3>
            <p className='font-nunito w-full max-w-[370px] text-base sm:text-lg leading-normal'>
            {info}
            </p>
        </div>
        
    );
}


export default CompanyCard