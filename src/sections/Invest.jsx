import { icons } from '../constants'
import IconCards from '../components/IconCards'

const Invest = () => {
    return (
        <section className= "max-container">
            <div>
            <h2 className='font-josefin text-center text-3xl sm:text-4xl font-semibold'>
                Why invest in Real Estate?
            </h2>
            <p className="font-nunito text-center text-sm sm:text-lg leading-6 sm:leading-8 sm:mt-6 mx-auto w-3/4">
                Raveum helps you improve your investment spending into property businesses that adapt to the market situation. Raveum helps you improve your investment spending into property businesses that adapt to the business.
            </p>
            </div>
            <div className="bg-gray-100 mt-10 grid lg:grid-cols-4 md:grid-cols-2 rounded-[16px] grid-cols-1 gap-16 py-10 place-items-center sm:px-10">
                {icons.map((card) => (
                <IconCards key={card.label} {...card} />
                ))}
            </div>

        </section>
    )
}

export default Invest