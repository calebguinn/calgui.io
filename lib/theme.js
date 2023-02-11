import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('#ffffff', '#111111')(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			},
      'page-title': {
        fontSize: 40
      }
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			textUnderlineOffset: 3
		})
	}
}

const fonts = {
	heading: "'Kaisei Tokumin'"
}

const colors = {
	
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
}

const Theme = extendTheme({ config, styles, components, fonts, colors })
export default Theme