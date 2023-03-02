import NextLink from 'next/link'
import { Heading, Box, Badge, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Global } from '@emotion/react'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/projects" passHref>
			<Box
        color={useColorModeValue('#3d7aed', '#ff63c3')}
        textDecoration='underline'
        textUnderlineOffset={3}
        display='inline-block'>
        Projects
      </Box>
		</NextLink>
		<span>
			{' '}
			<ChevronRightIcon />{' '}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const ProjectImage = ({ src, alt }) => (
  <Box mt={4} mb={4}>
    <Image 
        height="500" 
        width="900" 
        src={src} 
        alt={alt}
        className="project-image"
    />
  </Box>
  
)

export const ProjectImageStyle = () => (
	<Global
		styles={`
			.project-image {
				border-radius: 12px;
        height: 400px;
			}
		`}
	/>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)
