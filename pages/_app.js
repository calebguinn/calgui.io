import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Theme from "../lib/theme";


const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={Theme}>
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default Website