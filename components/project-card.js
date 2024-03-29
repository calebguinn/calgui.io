import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ProjectCard = ({ children, id, title, thumbnail }) => (
	<Box w="100%" textAlign="center">
		<NextLink href={`/projects/${id}`} passHref scroll={false}>
			<LinkBox 
      cursor="pointer"
      _hover={{ 
        bg: useColorModeValue('#cccccc80','#11111180')
      }}
      borderRadius={12}
      p={5}
      >
				<Image
					src={thumbnail}
					alt={title}
					className="project-card-thumbnail"
					placeholder="blur"
				/>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const ProjectCardStyle = () => (
	<Global
		styles={`
			.project-card-thumbnail {
				border-radius: 12px;
			}
		`}
	/>
)
