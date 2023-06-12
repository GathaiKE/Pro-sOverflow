/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '6.25rem'
      },
      fontFamily: {
        'irish': "'Irish Grover', serif"
      },
      colors:{
        primary:{
          'light':"#666666",
          'dark':"rgba(0, 0, 0, 0.68);"
        },
        gold: "#FFD700",
        green:"#008000",
        fade:"#D9D9D9",
        hero:"rgba(0, 0, 0, 0.7)",
        hdr:"rgba(0, 0, 0, 0.85);"
      },
      spacing:{
        hero:"43.75em",
        btn:"18rem",
        cont:"35rem"
      },
    }
  },
  plugins: [],
}

