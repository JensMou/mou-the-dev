import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - 404</title>
        </Head>
        <Container>
          <Intro title="404" />

          <h2 className="text-2xl my-5">Page could not be found</h2>
          <ul>
            <li>
              <Link href="/">
                <a className="hover:text-primary">{"->"} Go to Hello</a>
              </Link>
            </li>
            <li>
              <p
                onClick={() => router.back()}
                className="cursor-pointer hover:text-primary"
              >
                {"->"} Go Back
              </p>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
};

export default About;
