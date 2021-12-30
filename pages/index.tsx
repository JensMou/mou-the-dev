import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - Hello</title>
        </Head>
        <Container>
          <Intro title="Hello" />
          <p className="text-xl">
            I'm a frontend developer with a portfolio page. <br /> Original -
            right?
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
