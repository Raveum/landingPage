const CompanyCard = ({ imgURL, label, info}) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full sm:border sm:border-gray shadow-2xl rounded-[16px]'>
            <h3 className='text-xl leading-normal font-semibold text-raveum-blue font-palanquin px-5 py-5'>
            {label}
            </h3>
            <p className='px-5 font-montserrat text-xl leading-normal'>
            {info}
            </p>
            <img src={imgURL} className='w-[410px] h-[321px]' />
        </div>
        
    );
}


export default CompanyCard