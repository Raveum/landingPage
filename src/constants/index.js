import { re1, re2, re3, c1, c2, c3, r1, r2, r3, r4, facebook, instagram, twitter, investIcon, popular, rating, heartTrue, heartFalse } from '../assets';

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
        label: "Relax & Earn",
        subtext: "Earn Rental Income & Appreciation, all while Raveum manages the properties"
    },
    
];

export const properties = [
    {
        imgURL: re1,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "The Regal",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
    {
        imgURL: re2,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "The Brainerd",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
    {
        imgURL: re3,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "Tresury Tower",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
    {
        imgURL: re1,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "The Regal",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
    {
        imgURL: re2,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "The Brainerd",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
    {
        imgURL: re3,
        imgPop: popular,
        imgRating: rating,
        heartTrue: heartTrue,
        heartFalse: heartFalse,
        label: "Tresury Tower",
        location: "Laweyan, Surakarata",
        pricing: "$22,000",
        capRate: "8%",
        shares: "2200",
        rentalYield: "12%",
    },
];

// export const icons = [
//     {
//         imgURL: i1,
//         label: "Consistent passive income",
//         info: "Earn rental income and receive deposits quarterly, generating additional income streams to supplement your financial goals and build long-term wealth",
//     },
//     {
//         imgURL: i2,
//         label: "Property appreciation",
//         info: "Watch your investment grow as the home appreciates, providing the potential for capital gains and the opportunity to leverage your investment",
//     },
//     {
//         imgURL: i3,
//         label: "Flexible investment amounts",
//         info: "Invest anywhere from $100 to approximately $10,000 per house, making real estate investing more accessible to a wider range of investors",
//     },
//     {
//         imgURL: i4,
//         label: "Diversify with real estate",
//         info: "Access historically consistent returns with low correlation to the stock market, providing potential stability and added diversification to your portfolio.",
//     },
// ];

export const icons = [
    {
        imgURL: investIcon,
        label: "High Rental Yield",
        info: "8% - 10% rental yield and predictable cash flow",
    },
    {
        imgURL: investIcon,
        label: "Stable & Non-Correlated",
        info: "The performance of commercial real estate is not correlated with stocks and bonds.",
    },
    {
        imgURL: investIcon,
        label: "Capital Appreciation",
        info: "Year on year capital appreciation (17% - 25% IRR)",
    },
    {
        imgURL: investIcon,
        label: "Capital Preservation",
        info: "Real estate is a hard asset that preserves capital",
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
        info: "What is Raveum?",
    },
    {
        imgURL: r2,
        info: "What are Rental Assets?",
    },
    {
        imgURL: r3,
        info: "How to build your Portfolio?",
    },
    {
        imgURL: r4,
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
        title: "My Account",
        links: [
            { name: "Profile", link: "/" },
            { name: "Dashboard", link: "/" },
            { name: "Favourite", link: "/" },
            { name: "Settings", link: "/" },
        ],
    },
    {
        title: "Stats",
        links: [
            { name: "Ranking", link: "/" },
            { name: "Activity", link: "/" },
        ],
    },
];
