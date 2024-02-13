/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem'
            }
        }
    },

    plugins: [],
};

