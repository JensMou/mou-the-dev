import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Alert from "../components/alert";
const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - Home</title>
        </Head>
        <Container>
          <Intro title="Hello." />
        </Container>
      </Layout>
      <Alert />
    </>
  );
};

export default Index;
