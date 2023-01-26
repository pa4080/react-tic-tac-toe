/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "gold-primary": "#ffc500",
                "gold-secondary": "#ffd739"
            }
        },
        fontFamily: {
            waltograph: ["waltograph", "cursive"]
        }
    },
    plugins: []
};
