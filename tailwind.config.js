/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Albert Sans", "sans-serif"],
        },
        fontSize: {
            '6xl': ['3.75rem', {
                lineHeight: '5rem',
            }],
            '5xl': ['2.65rem'],
        }

    },
    plugins: [],
};
