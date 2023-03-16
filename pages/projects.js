import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectCard } from "../components/project-card";

import thumbIOS from '../public/static/images/projects/thumbIOS.png'
import thumbGOLv2 from '../public/static/images/projects/thumbGOL-v2.png'
import thumbPortfolio from '../public/static/images/projects/thumbPortfolio.png'

const Projects = () => (
	<Layout title="Projects">
		<Container maxW='container.md' mt={10}>
			<Heading variant='page-title' mb={10}>
				Projects
			</Heading>
			<SimpleGrid columns={[1, 1, 1]} gap={6}>
          
        <Section>
          <ProjectCard id="IOS" title="Instructor-Operator System" thumbnail={thumbIOS}>
						An instructor operator system designed for industrial flight simulators that 
            utilizes WebAssembly to allow concurrent access to a simulator for multiple instructors.
					</ProjectCard>
        </Section>
				<Section delay={0.1}>
          <ProjectCard id="GOLv2" title="Game of Life" thumbnail={thumbGOLv2}>
            A sandbox environment for John Conway&apos;s Game of Life, a 2-dimensional cellular automata that shows
            how complicated patterns can evolve from 3 simple rules. 
          </ProjectCard>
				</Section>
        <Section delay={0.2}>
          <ProjectCard id="Portfolio" title="Portfolio" thumbnail={thumbPortfolio}>
            My portfolio website, created using React, Next.js, Three.js. Styled using Chakra-UI. Holds all of my
            projects, posts, and contact information.
          </ProjectCard>
        </Section>
			</SimpleGrid>	
		</Container>
	</Layout>
)

export default Projects
