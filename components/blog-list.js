import Link from "next/link"
import { Box, Text, Spacer } from "@chakra-ui/react"
import { IoCalendar } from "react-icons/io5"
import { AiFillClockCircle } from "react-icons/ai"

export const BlogListCard = ({ id, title, timecode, date }) => {
  return (
  <Link href={`/posts/${id}`} passHref scroll={false}>
    <Box 
    borderRadius={15} 
    p={2} 
    >
      <Box display='inline-flex' w='100%'>
        <Text>
          {title}
        </Text>
        <Spacer boxSize={6}/>
        <Box display='inline-flex' alignItems='center'>
          <AiFillClockCircle /><Spacer boxSize={1} />
          <Text display='inline-flex' alignItems='center'>
            {timecode}
          </Text>
        </Box>
        <Box ml={4} display='inline-flex' alignItems='center'>
          <IoCalendar /><Spacer boxSize={1} />
          <Text display='inline-flex' alignItems='center'>
            {date}
          </Text>
        </Box>
      </Box>
    </Box>
  </Link>
  )
}