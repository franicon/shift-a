/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                '6xl': ['3.75rem', {
                    lineHeight: '5rem',
                }],
                '5xl': ['2.65rem'],
            }
        },
        fontFamily: {
            sans: ["Albert Sans", "sans-serif"],
        },
    },
    plugins: [],
};
