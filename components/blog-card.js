import { Box, Spacer, Text, useColorModeValue } from "@chakra-ui/react"
import Link from 'next/link'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoCalendar } from 'react-icons/io5'

export const BlogPostCard = ({ id, title, timecode, date, gradient }) => {
  return (
  <Link href={`/posts/${id}`} passHref scroll={false}>
    <Box 
    borderRadius={15} 
    bgGradient={gradient} 
    p={1} 
    maxW="100%" 
    height="250px"
    >
      <Box 
      borderRadius={12} 
      bg={useColorModeValue("#ffffff","#000000")} 
      height="100%" 
      p={6}
      _hover={{
        bg: useColorModeValue('#eeeeee','#222222')
      }}
      >
        <Text variant="blog-title" as="b" align="justify">
          {title}
        </Text>
        <Spacer boxSize={6} />
        <Text display='inline-flex' alignItems='center'>
          <AiFillClockCircle /><Spacer boxSize={1} />{timecode}
        </Text>
        <Text display='inline-flex' alignItems='center'>
          <IoCalendar /><Spacer boxSize={1} />{date}
        </Text>
      </Box>
    </Box>
  </Link>
  )
}