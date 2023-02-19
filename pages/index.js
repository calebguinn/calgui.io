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
import Paragraph from '../components/paragraph'
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
           bg={useColorModeValue('#aaaaaa','#222222')}
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
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <SimpleGrid columns={[1, 3, 3]} gap={6} mt={10}>
          <LinkItem href='https://github.com/calgui1' target="_blank">
            <IoLogoGithub />
            <Heading fontSize={20}>
              Github
            </Heading>
          </LinkItem>
          <LinkItem href='https://linkedin.com' target="_blank">
            <IoLogoLinkedin />
            <Heading fontSize={20}>
              LinkedIn
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