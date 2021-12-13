module.exports = {
  mode: 'jit',        //for enabling 'Just In Time'(JIT) mode
  purge: [
    '*.html',                           //project er root e index.html file ta ke track korbe
    './public/**/*.html',							  // These paths are just examples, customize them to match your project structure
    './src/**/*.{js,jsx,ts,tsx,vue}',		//details opore likha hoyeche txt file e
  ],
  darkMode: 'class', // or 'media' or 'class' //default vabe ( false ) likha chilo //'class' for dark mood on toogle
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#5F99F7'
        },
        'regal-blue': '#243c5a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
