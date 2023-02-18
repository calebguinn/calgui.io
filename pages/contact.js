import { Box, Container, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container maxW="container.md" mt={10}>
        <Heading variant="page-title">
          Say Hello
        </Heading>
        <Box maxW="container.md" bg="#22222299" borderRadius={10}>
          
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact