/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,html}",
    ],
    theme: {

        extend: {
            colors: {
                "primary": "#007CBD",
                "second": "#3EB7DD",
                "dark": "#1B1E28"
            },
            backgroundImage: {
                'hero': "url('./img/BackgroundHeroSection.png')",
                "mekanisme": "url('./src/img/Mekanisme.png')"

            }
        },
    },
    plugins: [],
}
