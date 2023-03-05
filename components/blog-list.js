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
        <Spacer display='inline-flex' boxSize={6}/>
        <Text display='inline-flex' alignItems='center'>
          <AiFillClockCircle /><Spacer boxSize={1} />{timecode}
        </Text>
        <Text ml={4} display='inline-flex' alignItems='center'>
          <IoCalendar /><Spacer boxSize={1} />{date}
        </Text>
      </Box>
    </Box>
  </Link>
  )
}