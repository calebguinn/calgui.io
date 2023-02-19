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
	<Layout title="Game of Life">
		<Container maxW='container.md' mt={10}>
			<Title>
				Game of Life Simulator <Badge>11/2022 - 02/2023</Badge>
			</Title>
			<Paragraph>
				An application that allows you to explore the full Life Lexicon and every discovered pattern in the Game of Life.
        It has an infinite map as well as over 5,000 patterns to choose from, it can even run a full Turing Machine (shown below).
			</Paragraph>
			<List ml={4} mt={4} mb={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://life.calgui.io">
						https://life.calgui.io <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/calgui1/game-of-life">
            https://github.com/calgui1/game-of-life <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Chrome, Safari, Firefox</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>HTML, JS, CSS</span>
				</ListItem>
			</List>
			<ProjectImage src="/images/projects/thumbGOL-v2.png" alt="Game of Life" />

		</Container>
	</Layout>
)

export default Project
