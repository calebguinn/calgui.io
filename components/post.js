import NextLink from 'next/link'
import { 
  Link , 
  ListItem, 
  Text,
  Heading, 
  Box, 
  Badge, 
  Image,
  useColorModeValue, 
  UnorderedList,
  OrderedList
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Children } from 'react'
import { Code } from './code'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/blog" passHref>
			<Box
        color={useColorModeValue('#3d7aed', '#ff63c3')}
        textDecoration='underline'
        textUnderlineOffset={3}
        display='inline-block'
        >
        Blog
      </Box>
		</NextLink>
		<span>
			{' '}
			<ChevronRightIcon boxSize={6} />{' '}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

const PostImage = ({ src, alt }) => (
  <Box p={6}>
    <Image src={src} alt={alt} w="100%" borderRadius="lg"/>
  </Box>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="green" ml={2} fontSize={16}>
		{children}
	</Badge>
)

const PostH1 = ({ children, id, ...rest }) => (
  <Heading mt={4} fontSize={32} {...rest}>
    {children}
  </Heading>
);

const PostH2 = ({ children, id, ...rest }) => (
  <Heading mt={4} fontSize={24} {...rest}>
    {children}
  </Heading>
);

const PostH3 = ({ children, id, ...rest }) => (
  <Heading mt={4} fontSize={18} {...rest}>
    {children}
  </Heading>
);

const PostH4 = ({ children, id, ...rest }) => (
  <Heading mt={4} fontSize={16} {...rest}>
    {children}
  </Heading>
);

const PostParagraph = ({ children, ...rest }) => {
  const firstChild = Children.toArray(children)[0];

  // Prevent img being wrapped in p
  if (firstChild.type === PostImage) {
    return children;
  }

  return (
    <Text size="l" as="p" pl={6} pr={6} pt={6}{...rest}>
      {children}
    </Text>
  );
};

const PostLink = ({ ...props }) => <Link {...props} />;

const PostUl = props => {
  return (
    <UnorderedList {...props} pl={20}/>
  )
};

const PostOl = props => {
  return <OrderedList {...props} />
};

const PostLi = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

const PostCode = ({ children, ...rest }) => {
  return (
    <code {...rest}>
      {children}
    </code>
  )
  
};

const PostPre = props => {
  return (
    <div>
      <Code {...props} />
    </div>
  );
};

const PostBlockquote = props => {
  return <blockquote {...props} />;
};

const PostHr = props => {
  return <hr {...props} />;
};

const PostStrong = props => {
  return <strong {...props} />;
};

const Embed = ({ src }) => {
  return (
    <div>
      <iframe src={src} loading="lazy" />
    </div>
  );
};

export const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed,
};