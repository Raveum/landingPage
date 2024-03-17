import { re1, re2, re3, i1, i2, i3, i4, c1, c2, c3, r1, r2, r3, r4, facebook, instagram, twitter } from '../assets';

export const navLinks = [
    { href: "#my-portfolio", label: "My Portfolio" },
    { href: "#explore", label: "Explore" },
    { href: "#about-us", label: "About Us" },
    { href: "#stats", label: "Stats" },
    { href: "#resources", label: "Resources" },
];

export const realEstateCards = [
    {
        number: 1,
        label: "Browse & Select",
        subtext: "Browse Raveum properties, each pre-vetted for their investment potential"
    },
    {
        number: 2,
        label: "Buy Shares",
        subtext: "Choose investment amount, select shares, sign terms electronically, and fund"
    },
    {
        number: 3,
        label: "Earn Rental Income & Appreciation",
        subtext: "All while Raveum manages the properties"
    },
    
];

export const properties = [
    {
        imgURL: re1,
        label: "12660 Ashford Point, Huston, TX 77082",
        info: "4 bd | 5 ba | 1683 sqft",
        stars: "4.94"
    },
    {
        imgURL: re2,
        label: "6639 SW 116th PL, Miami, FL 33173",
        info: "3 bd | 3 ba | 1490 sqft",
        stars: "4.88"
    },
    {
        imgURL: re3,
        label: "2293 Sacramento St, Vallejo, CA 94590",
        info: "6 bd | 6 ba | 2583 sqft",
        stars: "4.81"
    },
    {
        imgURL: re1,
        label: "12660 Ashford Point, Huston, TX 77082",
        info: "4 bd | 5 ba | 1683 sqft",
        stars: "4.94"
    },
    {
        imgURL: re2,
        label: "6639 SW 116th PL, Miami, FL 33173",
        info: "3 bd | 3 ba | 1490 sqft",
        stars: "4.88"
    },
    {
        imgURL: re3,
        label: "2293 Sacramento St, Vallejo, CA 94590",
        info: "6 bd | 6 ba | 2583 sqft",
        stars: "4.81"
    },
];

export const icons = [
    {
        imgURL: i1,
        label: "Consistent passive income",
        info: "Earn rental income and receive deposits quarterly, generating additional income streams to supplement your financial goals and build long-term wealth",
    },
    {
        imgURL: i2,
        label: "Property appreciation",
        info: "Watch your investment grow as the home appreciates, providing the potential for capital gains and the opportunity to leverage your investment",
    },
    {
        imgURL: i3,
        label: "Flexible investment amounts",
        info: "Invest anywhere from $100 to approximately $10,000 per house, making real estate investing more accessible to a wider range of investors",
    },
    {
        imgURL: i4,
        label: "Diversify with real estate",
        info: "Access historically consistent returns with low correlation to the stock market, providing potential stability and added diversification to your portfolio.",
    },
];

export const companies = [
    {
        imgURL: c1,
        label: "Worley",
        info: "Worley is a global engineering company that provides project delivery and consulting services to the resources and energy sector, as well as complex process industries.",
    },
    {
        imgURL: c2,
        label: "TATA",
        info: "Tata Group is a global conglomerate headquartered in India, with operations spanning sectors such as IT, automotive, consumer, retail, financial services and telecommunications.",
    },
    {
        imgURL: c3,
        label: "Telebrands",
        info: "Telebrands is a leading direct television marketing and original “As Seen on TV” products company, offering a wide range of consumer goods in various categories.",
    },
];

export const raveuminfo = [
    {
        imgURL: r1,
        label: "Explore Raveum",
        info: "What is Raveum?",
    },
    {
        imgURL: r2,
        label: "Explore Raveum",
        info: "What are Rental Assets?",
    },
    {
        imgURL: r3,
        label: "Explore Raveum",
        info: "How to build your Portfolio?",
    },
    {
        imgURL: r4,
        label: "Explore Raveum",
        info: "How to get started?",
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Explore",
        links: [
            { name: "Properties", link: "/" },
            { name: "Stats", link: "/" },
            { name: "Superlighted Cities", link: "/" },
            { name: "Raveum101", link: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Policies", link: "/" },
            { name: "Articles", link: "/" },
            { name: "Terms & Conditions", link: "/" },

        ],
    },
    {
        title: "Stats",
        links: [
            { name: "Ranking", link: "/" },
            { name: "Activity", link: "/" },
        ],
    },
    {
        title: "My Account",
        links: [
            { name: "Profile", link: "/" },
            { name: "Dashboard", link: "/" },
            { name: "Favourite", link: "/" },
            { name: "Settings", link: "/" },
        ],
    },
];
