const InfoCard = ({ imgURL, info}) => {
    return (
        <div className='flex bg-pale-blue flex-1 flex-col w-full max-sm:w-full gap-5 rounded-[16px]'>
            <div className= "mt-5 flex item-center justify-center"> 
                <img src={imgURL} className='w-[362px] h-[218px]' />
            </div>
            <p className='pb-5 font-josefin item-center justify-center flex text-lg leading-normal'>
            {info}
            </p>
        </div>
        
    );
}


export default InfoCard