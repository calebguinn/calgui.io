import NextLink from 'next/link'
import { Heading, Box, Image, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
	<Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)
