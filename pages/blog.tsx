import Container from "../components/Container";
import Intro from "../components/Intro";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import PostPreview from "../components/post/PostPreview";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Mou Dev - Blog</title>
      </Head>
      <Container>
        <Intro title="Blog" />
        <div className="flex flex-col">
          {allPosts.map((p, i) => (
            <PostPreview
              key={p.slug + i}
              title={p.title}
              coverImage={p.coverImage}
              date={p.date}
              author={p.author}
              slug={p.slug}
              excerpt={p.excerpt}
              numberOfWords={p.numberOfWords}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "numberOfWords",
  ]);

  return {
    props: { allPosts },
  };
};
