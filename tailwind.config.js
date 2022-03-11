module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'blockquote': 'url(./double-quote.svg);'
            },
            backgroundPosition: {
                'blockquote': 'right top'
            },
            backgroundSize: {
                'blockquote': '2.5rem'
            },

            fontSize: {
                'base': '16px'
            }
        },
    },
    plugins: [],
}