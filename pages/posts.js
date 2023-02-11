import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import defaultImage from "/public/images/projects/thumbIOS.png"

const Posts = () => (
	<Layout title="Posts">
		<Container maxW='container.md' mt={10}>
			<Heading as="h3" fontSize={20} mb={4}>
				Posts
			</Heading>
			<Section delay={0.1}>
				<SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title="Building my portfolio site"
						thumbnail={defaultImage}
						href="https://github.com/calgui1"
					/>
					<GridItem
						title="Building my portfolio site"
						thumbnail={defaultImage}
						href="https://github.com/calgui1"
					/>
					<GridItem
						title="Building my portfolio site"
						thumbnail={defaultImage}
						href="https://github.com/calgui1"
					/>
					<GridItem
						title="Building my portfolio site"
						thumbnail={defaultImage}
						href="https://github.com/calgui1"
					/>
				</SimpleGrid>
			</Section>
				
			
		</Container>
	</Layout>
)

export default Posts
