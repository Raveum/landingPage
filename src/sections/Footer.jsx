import { location, headerLogo, mailIcon } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="py-8 px-4 flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-nunito sm:max-w-sm">
            Raveum is a platform that allows you to invest in real estate
            properties with as little as $100. We provide a secure and
            transparent way to invest in real estate properties and earn passive
            income.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-start sm:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="w-1/2 md:w-auto">
              <h4 className="font-josefin text-base sm:text-xl sm:leading-normal mt-2 font-semibold mb-2 sm:mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-nunito text-sm sm:text-base leading-normal pb-2 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start sm:flex-row sm:justify-between mt-6">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={location}
            alt="location sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>254 Chapman Road, 16526 Newark, DE 19702, United States</p>
        </div>
        <div className="flex justify-start sm:justify-end items-center gap-2 font-montserrat cursor-pointer mt-4 sm:mt-0">
          <img
            src={mailIcon}
            alt="mail sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="font-montserrat cursor-pointer">support@raveum.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
