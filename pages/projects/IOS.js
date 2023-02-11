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
	<Layout title="IOS">
		<Container maxW='container.md' mt={10}>
			<Title>
				Instructor Operator System <Badge>08/2022 - 12/2022</Badge>
			</Title>
			<Paragraph>
				An instructor operator system for industrial-grade flight simulators that utilizes WebAssembly.
			</Paragraph>
			<List ml={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://www.github.com/calgui1/CymStar-IOS">
						https://www.github.com <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Chrome, Safari, Firefox</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>C++, WebAssembly</span>
				</ListItem>
			</List>
			<ProjectImage src="/images/projects/thumbIOS.png" alt="IOS" />			
		</Container>
	</Layout>
)

export default Project
