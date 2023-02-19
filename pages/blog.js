import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { BlogPostCard } from "../components/blog-card";

const Blog = () => (
	<Layout title="Blog">
		<Container maxW='container.md' mt={10}>
			<Heading variant='page-title' mb={10}>
				Blog
			</Heading>
			<Section delay={0.1}>
				<SimpleGrid columns={[1, 2, 3]} gap={12}>
          <BlogPostCard id="" title="Building my portfolio site" gradient="linear(to-r, #D8B4FE , #818CF8)" />
          <BlogPostCard id="" title="Creating the Game of Life" gradient="linear(to-r, #6EE7B7, #3B82F6, #9333EA)" />
          <BlogPostCard id="" title="Building the Instructor Operator System" gradient="linear(to-r, #FDE68A, #FCA5A5, #FECACA)"/>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
)

export default Blog
