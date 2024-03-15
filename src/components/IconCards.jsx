
const IconCards = ({ imgURL, label, info}) => {
    return (
      <div className='bg-white flex flex-1 flex-col w-full max-sm:w-full sm:border rounded-[20px] py-5 items-center'>
      <div className = 'w-11 h-11 flex justify-center'>
      <img src={imgURL} className="w-[48px] h-[44px]"/>
      </div>
        <h3 className='m-auto text-center mt-5 text-xl pb-2 leading-normal font-semibold font-palanquin'>
          {label}
        </h3>
        <p className='m-auto text-center info-text'>
          {info}
        </p>
    </div>

    );
}


export default IconCards