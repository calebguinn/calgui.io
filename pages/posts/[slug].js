import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import readingTime from 'reading-time'
import rehypeImgSize from 'rehype-img-size'
import rehypeMinify from 'rehype-preset-minify'
import rehypeSlug from 'rehype-slug'
import { POSTS_PATH, postFilePaths } from '../../lib/mdx'
import { formatTimecode } from '../../lib/timecode'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { postMarkdown } from '../../components/post'
import { Title, Meta } from '../../components/post'
import Layout from '../../components/layouts/article'

export default function PostPage({ frontmatter, code }) {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout title="Post">
      <Container maxW='container.md' mt={10}>
        <Title>
          {frontmatter.title}
          <Meta>{frontmatter.date}</Meta>
        </Title>
        <Box bg={useColorModeValue('#dddddd','#22222290')} borderRadius={15} p={5}>
          <MDXComponent components={postMarkdown} />
        </Box>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf-8');

  const { code, frontmatter, matter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeMinify,
        [rehypeImgSize, { dir: 'public' }],
      ];

      return options;
    },
  });

  const { time } = readingTime(matter.content);
  const timecode = formatTimecode(time);

  return {
    props: { code, frontmatter, timecode },
    notFound: process.env.NODE_ENV === 'production' && frontmatter.draft,
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map(filePath => filePath.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};