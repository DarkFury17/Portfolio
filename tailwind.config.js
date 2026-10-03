/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: '#09090b',
        surface: '#121216',
        surfaceHover: '#18181f',
        border: '#27272a',
        borderMuted: '#1f1f24',
      },
      boxShadow: {
        'bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08), 0 16px 36px -12px rgba(0, 0, 0, 0.75)',
        'bezel-hover': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.18), 0 24px 48px -12px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}
