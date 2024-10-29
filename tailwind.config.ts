import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			green: {
  				bongs: '#0E9394',
  				bright: '#41C980'
  			},
  			orange: '#FFA800',
  			lightblue: '#F9FAFB',
  			searchbar: '#FBFBFD',
  			subheader: {
  				lightblue: '#F1F3F9'
  			},
  			purple: '#F8F5FE',
  			border: {
  				purple: '#C8B5F8',
  				subheader: '#E2E6EE'
  			},
  			primary: '#40444C',
  			secondary: '#626C83',
  			tertiary: '#96A0B6'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
