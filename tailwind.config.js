module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'search-input': 'searchInput .5s',
        'search-input2': 'searchInput2 .5s'
      },
      keyframes: {
        searchInput: {
          '0%': { borderRadius: '50%' },
          '10%': { borderRadius: '6px' },
        },
        searchInput2: {
          '0%, 80%': { borderRadius: '6px' },
          '100%': { borderRadius: '50%' },
        }
      },
      transitionProperty: {
        width: 'width, backgroundColor',
      }
    },
  },
  plugins: [],
};
