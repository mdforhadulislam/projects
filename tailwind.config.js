module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        screens: {
            ip: { max: '400px' },
            ip12: { max: '490px' },
            sm: { max: '624px' }, // => @media (min-width: 640px) { ... }
            md: { max: '768px' }, // => @media (min-width: 768px) { ... }
            mdd: { max: '855px' }, // => @media (min-width: 768px) { ... }
            lg: { max: '1024px' },
            // => @media (min-width: 1024px) { ... }
            xl: { max: '1280px' },
            // => @media (min-width: 1280px) { ... }
            '2xl': { max: '1536px' }
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            boxShadow: {
                '3xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)',
                '4xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)',
                '5xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 25%)'
            }
        }
    },
    plugins: []
};

// module.exports = {
//     content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//     theme: {
//         extend: {}
//     },
//     plugins: []
// };
