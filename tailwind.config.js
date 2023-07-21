/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,html}",
    ],
    theme: {

        extend: {
            fontFamily: {
                "sans": "Montserrat"
            },
            colors: {
                "primary": "#007CBD",
                "second": "#3EB7DD",
                "dark": "#1B1E28",
                "input": "#F8F8F8"
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0)' },
                    ' 100%': { transform: 'translateX(-100%)' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }

            },

        },
    },
    plugins: [],
}

