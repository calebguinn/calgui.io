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
				An instructor operator system for industrial-grade flight simulators that utilizes WebAssembly. This
        project was built for my Senior Capstone Experience course and I worked with a company to develop this
        solution. I designed and implemented the UI using C++ and compiled it to WebAssembly using the Emscripten
        compiler. This solution enables concurrent access to the same flight simulation, as well as a dramatically
        reduced setup time since it can be accessed from any modern web browser on tablet or desktop. 
			</Paragraph>
			<List ml={4} mt={4} mb={8}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/calgui1/Instructor-Operator-System">
            https://github.com/calgui1/Instructor-Operator-System <ExternalLinkIcon mx="2px" />
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
      <Paragraph>
        Since this was a prototype built using an existing codebase, I am unable to provide any demo of this application because
        the company works with the U.S. Department of Defense and wants to maintain privacy.
      </Paragraph>
		</Container>
	</Layout>
)

export default Project
