import { 
	Container, 
	Box, 
	Heading,
	Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'

const Home = () => {
	return (
		<Container maxW="container.md" mt={10}>
			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading variant="page-title">
						Caleb Guinn
					</Heading>
					<p>Software Engineer / Web Developer</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					textAlign="center"
				>
					<Box
						w="100px"
						h="100px"
						display="inline-block"
						borderRadius="full"
						overflow="hidden"
					>
					</Box>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About
				</Heading>
				<Paragraph>
					Insert about section here
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/projects" passHref scroll={false}>
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My projects
						</Button>
					</NextLink>
				</Box>
			</Section>	
		</Container>
	)	
}

export default Home