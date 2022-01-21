module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      margin:{
        "1/4":"50%"
      },
      height:{
        '100vh':'100vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
