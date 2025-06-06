/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,scss}"
  ],
  // Desactivem el preflight perquè no sobrescrigui els estils del Boilerplate
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // Si vols, aquí pots afegir colors o tipografies personalitzats
      colors: {
        "uoc-corporate": "#000078",
        "uoc-masterbrand": "#73edff"
      }
    }
  },
  plugins: [],
}
