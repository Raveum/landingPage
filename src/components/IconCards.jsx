const IconCards = ({ imgURL, label, info }) => {
  return (
    <div className='bg-white flex flex-col items-center gap-y-6 rounded-[20px] py-5 shadow-md' style={{ width: '280px', height: '280px' }}>
      <div className='w-11 h-11 flex justify-center mt-6'>
        <img src={imgURL} className="w-[48px] h-[44px]" alt="" />
      </div>
      <h3 className='text-center text-base leading-normal font-semibold font-nunito italic'>
        {label}
      </h3>
      <p className='text-center font-nunito text-sm px-6'>
        {info}
      </p>
    </div>
  );
};

export default IconCards;
