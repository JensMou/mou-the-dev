import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Mou Dev - Blog</title>
      </Head>
      <Container>
        <Intro title="Blog" />
      </Container>
    </>
  );
};

export default Blog;
