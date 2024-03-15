import { heroRight } from '../assets'


const Hero = () => {
    return (
        <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
            <div className = "relative xl:w-2/4 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <h1 className= "mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-semibold"> 
                    <span>Navigating the Real </span> 
                    <br/>
                    <span>Estate Market with</span>
                    <br/>
                    <span>Confidence</span>
                </h1>
                <p className = "font-montserrat text-xl leading-8 mt-6 mb-6 sm:max-w-base">Raveum helps you improve your investment spending into property businesses that adapt to the market situation. Raveum helps you improve your investment spending into property businesses that adapt to the business.</p>

                <div className="flex items-center py-3 px-4 p-2 sm:border sm:border-slate-gray rounded-md w-full">
                    <input 
                        type="text"
                        placeholder="Search by properties, portfolio or location"
                        className="input bg-white py-2 rounded-md"
                    />
                    <button className="flex justify-center items-center px-5 h-8 bg-raveum-lightblue hover:bg-raveum-blue rounded-md transition duration-150 ease-in-out text-white">
                        Search
                    </button>
                </div>

            </div>
            <div className='relative pt-28 flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40'>
                <img
                src={heroRight}
                alt='Property colletion'
                width={700}
                height={502}
                className='object-contain relative z-10'
                />
            </div>
        </section>
    )
}

export default Hero