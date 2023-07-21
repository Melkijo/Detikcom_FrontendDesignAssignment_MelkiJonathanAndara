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
                "dark": "#1B1E28"
            },
        },
    },
    plugins: [],
}

