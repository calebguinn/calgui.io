import { Container } from "@chakra-ui/react";
import Layout from "../../components/layouts/article"
import { Title } from "../../components/post";
import { Badge } from "@chakra-ui/react";

const Post = () => {
  return (
    <Layout title="Post">
      <Container maxW="container.md" mt={10}>
        <Title>
          Creating the Game of Life Simulator using Javascript and HTML<Badge fontSize={20}>01/01/2023</Badge>
        </Title>
      </Container>
    </Layout>
  )
}

export default Post