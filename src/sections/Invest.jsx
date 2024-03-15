import { icons } from '../constants'
import IconCards from '../components/IconCards'

const Invest = () => {
    return (
        <section className= "max-container">
            <div>
            <h2 className='font-palanquin text-center text-4xl font-semibold'>
                Why invest in Real Estate?
            </h2>
            <p className='m-auto mt-4 text-center info-text'>
                Raveum helps you improve your investment spending into property businesses that adapt to the market situation. Raveum helps you improve your investment spending into property businesses that adapt to the business.
            </p>
            </div>
            <div className="bg-gray-100 mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 py-10 px-10">
                {icons.map((card) => (
                <IconCards key={card.label} {...card} />
                ))}
            </div>

        </section>
    )
}

export default Invest