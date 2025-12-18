/**
 * GRABiT-Labs Tailwind Theme Extension
 * For Cal.com white-label customization
 * 
 * Usage: Merge this into Cal.com's tailwind.config.js
 * or import as a preset
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Base colors
        bg: '#0E0F10',
        surface: '#15181B',
        border: '#2A2F36',
        text: '#E6E8EB',
        muted: '#B7BDC6',

        // Primary - Modern Bronze
        primary: {
          DEFAULT: '#C38E3D',
          hover: '#D39A43',
          active: '#B98236',
          fg: '#0B0C0E',
        },

        // Links
        link: {
          DEFAULT: '#C38E3D',
          hover: '#D39A43',
        },

        // Semantic
        success: '#45B07C',
        warning: '#E3A23B',
        danger: '#E26D5A',

        // Focus
        focus: '#E0AE47',
      },

      // Ring color for focus states
      ringColor: {
        DEFAULT: '#E0AE47',
      },

      // Border color
      borderColor: {
        DEFAULT: '#2A2F36',
      },

      // Border radius
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
      },

      // Box shadows
      boxShadow: {
        elev1: '0 2px 10px rgba(0, 0, 0, 0.35)',
        elev2: '0 6px 24px rgba(0, 0, 0, 0.45)',
      },

      // Background colors
      backgroundColor: {
        DEFAULT: '#0E0F10',
        surface: '#15181B',
      },

      // Text colors
      textColor: {
        DEFAULT: '#E6E8EB',
        muted: '#B7BDC6',
      },
    },
  },
  plugins: [],
}
