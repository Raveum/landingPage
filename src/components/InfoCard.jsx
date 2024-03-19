const InfoCard = ({ imgURL, info }) => {
    return (
        <div className='bg-pale-blue flex flex-col items-center justify-start rounded-[16px]' style={{ width: '410px', height: '320px', boxSizing: 'border-box' }}>
            <div className="flex justify-center items-start w-full h-full border-emerald-950">
                <img src={imgURL} alt="" style={{ width: '368px', height: '263px' }} />
            </div>

            <p className='text-center font-montserrat text-xl leading-normal pb-5 px-5'>
                {info}
            </p>
        </div>

        
    );
}


export default InfoCard
