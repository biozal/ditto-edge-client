import { PortalTheme } from './types'

export const darkTheme: PortalTheme = {
  background: {
    DEFAULT: '#100E0E',
    surface: {
      DEFAULT: '#181616',
      hovered: '#1D1B1B',
      secondary: '#1D1B1B',
    },
    overlay: {
      DEFAULT: '#1D1B1B',
      hovered: '#222020',
    },
    inverse: '#FFFFFF',
  },
  fill: {
    brand: {
      primary: {
        DEFAULT: '#0066FF',
        hovered: '#0052CC',
      },
      secondary: {
        DEFAULT: '#1D1B1B',
        hovered: '#181616',
      },
    },
    disabled: '#A8A6A3',
    opaque: '#F5F3EF05',
    info: {
      DEFAULT: '#0092FF',
      secondary: '#91D0FF26',
    },
    success: {
      DEFAULT: '#199E61',
      secondary: '#1AA36426',
    },
    warning: {
      DEFAULT: '#E56000',
      secondary: '#E5600026',
    },
    critical: {
      DEFAULT: '#E51C00',
      secondary: '#E51C0026',
    },
    promo: {
      DEFAULT: '#8051FF',
      secondary: '#8051FF26',
    },
  },
  foreground: {
    normal: '#F5F3EF',
    subtle: '#A8A6A3',
    accent: '#1A85FF',
    warning: '#FF7A1A',
    disabled: '#A8A6A3',
    'on-fill': '#F5F3EF',
    'on-inverse': '#181616',
  },
  border: {
    normal: '#F5F3EF14',
    strong: '#F5F3EF',
    info: '#0092FF',
    success: '#199E61',
    warning: '#E56000',
    critical: '#E51C00',
    promo: '#8051FF',
  },
  focus: {
    outline: '#0066FF',
  },
}
