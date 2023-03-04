import NextLink from 'next/link'
import { 
  Link , 
  List, 
  ListItem, 
  Text,
  Heading, 
  Box, 
  Image, 
  Badge, 
  useColorModeValue 
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

export const PostImage = ({ src, alt }) => (
	<Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)

const PostH1 = ({ children, id, ...rest }) => (
  <Heading id={id} level={2} as="h1" {...rest}>
    {children}
  </Heading>
);

const PostH2 = ({ children, id, ...rest }) => (
  <Heading id={id} level={3} as="h2" {...rest}>
    {children}
  </Heading>
);

const PostH3 = ({ children, id, ...rest }) => (
  <Heading id={id} level={4} as="h3" {...rest}>
    {children}
  </Heading>
);

const PostH4 = ({ children, id, ...rest }) => (
  <Heading id={id} level={5} as="h4" {...rest}>
    {children}
  </Heading>
);

const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];

  // Prevent `img` being wrapped in `p`
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }

  return (
    <Text size="l" as="p" {...rest}>
      {children}
    </Text>
  );
};

const PostLink = ({ ...props }) => <Link {...props} />;

const PostUl = props => {
  return <List {...props} />;
};

const PostOl = props => {
  return <List ordered {...props} />;
};

const PostLi = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

const PostCode = ({ children, ...rest }) => (
  <code {...rest}>
    <Code>
      {children}
    </Code>
  </code>
);

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