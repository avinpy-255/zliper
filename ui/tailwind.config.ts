
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				zlipper: {
					dark: '#1A1F2C',
					darker: '#15171F',
					purple: '#8B5CF6',
					pink: '#D946EF',
					orange: '#F97316',
					pastel1: '#E5DEFF',
					pastel2: '#FDE1D3',
					pastel3: '#D3E4FD',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				glow: {
					'0%, 100%': {
						boxShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.4)'
					}
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				zip: {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
					'100%': { transform: 'scaleY(1)' },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse": "pulse 2s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite",
				"rotate": "rotate 5s linear infinite",
				"bounce": "bounce 1s ease-in-out infinite",
				"zip": "zip 1s ease-in-out",
			},
			boxShadow: {
				neon: '0 0 5px theme(colors.zlipper.purple), 0 0 20px theme(colors.zlipper.purple)',
				'neon-pink': '0 0 5px theme(colors.zlipper.pink), 0 0 20px theme(colors.zlipper.pink)',
				'neon-orange': '0 0 5px theme(colors.zlipper.orange), 0 0 20px theme(colors.zlipper.orange)',
				'glow-orange': '0 0 10px rgba(249, 115, 22, 0.4)',
				'glow-orange-lg': '0 0 15px rgba(249, 115, 22, 0.6)',
			},
			}
		},
		plugins: [require("tailwindcss-animate")],
	} satisfies Config;
