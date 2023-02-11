import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";

import thumbIOS from '../public/images/projects/thumbIOS.png'
import thumbGOLv2 from '../public/images/projects/thumbGOL-v2.png'
import thumbPortfolio from '../public/images/projects/thumbPortfolio.png'

const Projects = () => (
	<Layout title="Projects">
		<Container maxW='container.md' mt={10}>
			<Heading as="h3" fontSize={20} mb={4}>
				Projects
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Portfolio" title="Portfolio" thumbnail={thumbPortfolio}>
            My portfolio website, the one you are currently visiting.
          </WorkGridItem>
        </Section>
				<Section>
          <WorkGridItem id="GOLv2" title="Game of Life" thumbnail={thumbGOLv2}>
            A sandbox environment for John Conway's Game of Life, a 2-dimensional cellular automata that shows
            how complicated patterns can evolve from 3 simple rules. 
          </WorkGridItem>
				</Section>
        <Section delay={0.2}>
          <WorkGridItem id="IOS" title="Instructor-Operator System" thumbnail={thumbIOS}>
						An instructor operator system designed for industrial flight simulators that 
            utilizes WebAssembly technology to allow concurrent access to a simulator for multiple instructors.
					</WorkGridItem>
        </Section>
				
			</SimpleGrid>	
		</Container>
	</Layout>
)

export default Projects
