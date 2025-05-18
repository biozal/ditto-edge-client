type Background = {
	DEFAULT: string
	surface: {
	  DEFAULT: string
	  hovered: string
	  secondary: string
	}
	overlay: {
	  DEFAULT: string
	  hovered: string
	}
	inverse: string
  }
  
  type Foreground = {
	normal: string
	subtle: string
	accent: string
	warning: string
	disabled: string
	'on-fill': string
	'on-inverse': string
  }
  
  const variants = ['info', 'success', 'warning', 'critical', 'promo'] as const
  
  type Border = Record<(typeof variants)[number], string> & {
	normal: string
	strong: string
  }
  
  type DefaultWithHovered = {
	DEFAULT: string
	hovered: string
  }
  
  type Brand = {
	primary: DefaultWithHovered
	secondary: DefaultWithHovered
  }
  
  type DefaultWithSecondary = {
	DEFAULT: string
	secondary: string
  }
  
  type Fill = Record<(typeof variants)[number], DefaultWithSecondary> & {
	brand: Brand
	disabled: string
	opaque: string
  }
  
  type Focus = {
	outline: string
  }
  
  export type PortalTheme = {
	background: Background
	foreground: Foreground
	fill: Fill
	border: Border
	focus: Focus
  }
  