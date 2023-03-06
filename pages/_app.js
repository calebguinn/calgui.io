import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Theme from "../lib/theme";
import Fonts from '../components/fonts';
import { Analytics } from '@vercel/analytics/react'


const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={Theme}>
      <Fonts />
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
        <Analytics />
			</Layout>
		</ChakraProvider>
	)
}

export default Website