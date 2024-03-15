const EstateCard = ({ number, label, subtext}) => {
    return (
        <div className="sm:w-[350px] sm:min-w-[500px] w-full rounded-[20px] shadow-3xl px-14 py-8">
        <h3 className='font-palanquin text-3xl font-semibold'>
            <span className= "text-raveum-blue text-4xl font-bold"> {number} </span>
            {label}
        </h3>
        <p>
            {subtext}
        </p>
        
        </div>
    )

}

export default EstateCard