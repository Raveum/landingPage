const EstateCard = ({ number, label, subtext}) => {
    return (
        <div className="sm:w-[350px] sm:min-w-[500px] w-full rounded-[20px] shadow-3xl px-14 py-8">
        <h3 className='font-josefin text-2xl sm:text-3xl font-semibold italic'>
            <span className= "font-josefin text-raveum-blue text-3xl sm:text-[36px] font-bold italic"> {number} </span>
            {label}
        </h3>
        <p className="font-nunito text-sm sm:text-lg">
            {subtext}
        </p>
        
        </div>
    )

}

export default EstateCard