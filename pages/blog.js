import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { BlogPostCard } from "../components/blog-card";
import fs from 'fs'
import path from 'path'
import matter from "gray-matter";
import readingTime from "reading-time";
import { POSTS_PATH, postFilePaths } from "../lib/mdx";
import { formatTimecode } from "../lib/timecode";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <Container maxW='container.md' mt={10}>
        <Heading variant='page-title' mb={10}>
          Blog
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 3]} gap={12}>
            {posts.map(({slug, ...post}, index)  => (
              <BlogPostCard 
                id={slug} 
                title={post.title}
                timecode={post.timecode} 
                date={post.date}
                gradient="linear(to-r, #D8B4FE , #818CF8)" 
                key={index}
              />
            ))}
          </SimpleGrid>
        </Section> 
      </Container>
    </Layout>
  )	
}

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data, content } = matter(source);

    const { time } = readingTime(content);
    const timecode = formatTimecode(time);

    return {
      ...data,
      timecode,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const posts = allPosts
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: {posts},
  };
}
