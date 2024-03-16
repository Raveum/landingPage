import { psLeft } from '../assets'
import { realEstateCards } from '../constants'
import EstateCard from '../components/EstateCard'

const PropertySearch = () => {
    return (
        <section className=" flex justify-between items-center max-xl:flex-col gap-20 max-container">

            <div className="flex-1">
                <img src={psLeft} width={400} height={400} className = "object-contains "/>
                <h1 className='text-4xl font-palanquin font-bold'>
                    Real Estate in 3 Steps
                </h1>
                <p className = "font-montserrat text-xl leading-8 mt-6 mb-6 sm:max-w-base">Raveum helps you improve your investment spending into property businesses that adapt to the market situation. Raveum helps you improve your investment spending into property businesses that adapt to the business.</p>
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