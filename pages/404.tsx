import Container from "../components/Container";
import Intro from "../components/Intro";
import Head from "next/head";
import Emoji from "../components/Emoji";
import BackArrow from "../components/BackButton";

const About = () => {
  return (
    <>
      <Head>
        <title>Mou Dev - 404 - Page Not Found</title>
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
        <BackArrow />
      </Container>
    </>
  );
};

export default About;
