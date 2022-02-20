import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container";
import ProjectBody from "../../components/project/ProjectBody";
import ProjectHeader from "../../components/project/ProjectHeader";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import ProjectTitle from "../../components/project/ProjectTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import Button from "../../components/Button";

type Props = {
  post: PostType;
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      <Button onClick={() => router.back()}>{"<-"} Go Back</Button>
      {router.isFallback ? (
        <ProjectTitle>Loading…</ProjectTitle>
      ) : (
        <>
          <article className="p-8 md:p-32 bg-glass dark:bg-glassDark rounded-2xl	">
            <Head>
              <title>Mou Dev - {post.title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <ProjectHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <ProjectBody content={post.content} />
          </article>
        </>
      )}
    </Container>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
