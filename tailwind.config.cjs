/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            backgroundImage: {
                'fundo-01': "url('./src/assets/principal.png')",
            },

            colors: {
                brand: {
                    300: "#011112",
                    500: "#54F0F9",
                    600: "#91FCFB",
                    700: "#3CE3B7",
                },

            },
            borderRadius: {
                md: '16px',
                xl: '170px'
            },
        },
        fontFamily: {
            'display': ['Encode Sans', ],
            'body': ['Encode Sans', ],
            'sans': ['Encode Sans', ],
            'serif': ['Encode Sans', ],
        }
    },
    plugins: [],
}