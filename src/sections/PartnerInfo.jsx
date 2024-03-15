import { companies } from '../constants'
import CompanyCard from '../components/CompanyCard'

const PartnerInfo = () => {
    return (
        <section className= "max-container">
            <div>
                <p className='m-auto text-center info-text'>
                    GET TO KNOW US BETTER
                </p>
                <h2 className='font-palanquin text-center text-4xl font-semibold'>
                    Here&apos;s what the world&apos;s talking about us
                </h2>
            </div>
            <div className="flex-1 mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {companies.map((card) => (
                <CompanyCard key={card.label} {...card} />
                ))}
            </div>

        </section>
    )
}

export default PartnerInfo