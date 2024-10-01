/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: ['DegularDemo', 'sans-serif'],
        pixelify: ['Pixelify Sans', 'sans-serif'],
        p2p: ['"Press Start 2P"', 'system-ui'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'banana-yellow': '#F0B541',
        'bg-1': '#ECD6AB',
        'bg-2': '#C28569',
      },
      boxShadow: {
        'custom': '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
      },
    },
  },
  important: true, 
  plugins: [],
};

