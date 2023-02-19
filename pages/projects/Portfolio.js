import { 
	Container,
	Badge,
	Link,
	List,
	ListItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
	<Layout title="Portfolio">
		<Container maxW='container.md' mt={10}>
			<Title>
				Portfolio Website <Badge>01/2022 - 03/2023</Badge>
			</Title>
			<Paragraph>
				My portfolio website, built with React and Next.js, styled with Chakra-UI and CSS. This website is
        meant to be a place to display my work and connect with others. I am using Vercel to deploy
        and host my other sites.
			</Paragraph>
			<List ml={4} mt={4} mb={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://calgui.io">
						https://calgui.io <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/calgui1/calgui.io">
            https://github.com/calgui1/calgui.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Chrome, Safari, Firefox</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Node.js, Next.js, React, Chakra-UI, Three.js</span>
				</ListItem>
			</List>
			<ProjectImage src="/images/projects/thumbPortfolio.png" alt="Portfolio" />			
		</Container>
	</Layout>
)

export default Project