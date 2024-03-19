import { psLeft } from '../assets'
import { realEstateCards } from '../constants'
import EstateCard from '../components/EstateCard'

const PropertySearch = () => {
    return (
        <section className=" flex justify-between items-center max-xl:flex-col gap-20 max-container">

            <div className="flex-1">
                <img src={psLeft} width={400} height={400} className = "object-contains "/>
                <h1 className='text-3xl sm:text-4xl font-josefin font-bold'>
                    Real Estate in 3 Steps
                </h1>
                <p className = "font-nunito text-sm sm:text-lg leading-6 sm:leading-8 sm:mt-6 sm:max-w-base">
                    Diversify and reduce risk with hassle-free real estate investment for consistent returns without the headaches. Effortlessly invest in a residential  home or commercial property and start earning passive income.
                </p>
            </div>
            
            <div className="flex-1 space-y-4 max-w-[500px]">
                {realEstateCards.map((card) => (
                <EstateCard key={card.number} {...card} />
                ))}
            </div>

        </section>
    )
}

export default PropertySearch