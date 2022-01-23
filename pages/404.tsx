import Container from "../components/Container";
import Intro from "../components/Intro";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Emoji from "../components/Emoji";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mou Dev - 404</title>
      </Head>
      <Container>
        <Intro
          title={
            <span>
              404 <Emoji symbol="🙈" label="see-no-evil monkey" />
            </span>
          }
        />
        <h2 className="text-2xl my-5">Page could not be found</h2>
        <Button onClick={() => router.back()}>{"->"} Go Back</Button>
      </Container>
    </>
  );
};

export default About;
