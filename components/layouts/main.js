import Head from "next/head";
import NavBar from '../navbar.js'
import { Box, Container } from "@chakra-ui/react";
import { DisplacementSphere } from "../displacementSphere/displacementSphere.js";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Caleb Guinn</title>
			</Head>

			<NavBar path={router.asPath} />
      <DisplacementSphere />
			<Container maxW="container.lg" pt={14}>
				{children}
			</Container>
		</Box>
	)
}

export default Main