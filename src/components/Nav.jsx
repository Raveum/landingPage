import { headerLogo } from '../assets'
import { navLinks } from "../constants";


const Nav = () => {
    return (
        <header className = "padding-x py-8 absolute z-10 w-full">
            <nav className = "flex justify-between item-center max-container">
                <a href = "/">
                    <img
                        src = {headerLogo}
                        alt = "Logo"
                        width = {180}
                        height = {50}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-black hover:text-slate-gray transition-colors duration-300 ease-in-out'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
            </nav>
        </header>
    )
}

export default Nav