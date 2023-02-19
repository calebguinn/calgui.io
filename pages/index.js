import { 
	Container, 
	Box, 
	Heading,
	Button,
  SimpleGrid,
  useColorModeValue,
  Spacer
} from '@chakra-ui/react'
import Section from '../components/section'
import {ChevronRightIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, target, children, ...props }) => {
	return (
		<NextLink 
        href={href}
        passHref
        scroll={false}
        target={target}
      >
        <Box
           p={5}
           bg={useColorModeValue('#eeeeee','#222222')}
           target={target}
           borderRadius={5}
           gap={1}
           height='60px'
           width='100%'
           display='inline-flex'
           alignItems='center'
           {...props}
           >
            {children}
            <Spacer />
            <ExternalLinkIcon />
        </Box>
		</NextLink>
	)
}

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
				<p>
				  I'm Caleb, currently I live in Oklahoma and attend the University of Oklahoma (Class of &apos;23).
          I have worked on front-end projects, desktop applications, and various other projects inside and outside
          of school. I enjoy working with new and emerging technologies to create visually appealing and functional 
          user experiences. 
				</p>
				<Box align="center" alignItems='center' my={4} mb={10} mt={5}>
					<NextLink href="/projects" passHref scroll={false}>
						<Button rightIcon={<ChevronRightIcon boxSize={6} />} colorScheme="teal">
							My projects
						</Button>
					</NextLink>
				</Box>
        <p>
          My projects page include a few, but not all, of the things that I have worked on 
          with more to come in the future. Check out my blog posts for a more in depth explanation of the stories
          behind each project and how I developed them.
        </p>
			</Section>	
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <SimpleGrid columns={[1, 3, 3]} gap={6} mt={10}>
          <LinkItem href='https://github.com/calgui1' target="_blank">
            <IoLogoGithub />
            <Heading fontSize={20}>
              GitHub
            </Heading>
          </LinkItem>
          <LinkItem href='https://linkedin.com' target="_blank">
            <IoLogoLinkedin />
            <Heading fontSize={20}>
              Linkedin
            </Heading>
          </LinkItem>
          <LinkItem href='/contact' target=''>
            <Heading fontSize={20}>
              Contact
            </Heading>
          </LinkItem>
        </SimpleGrid>
      </Section>
		</Container>
  )
}

export default Home