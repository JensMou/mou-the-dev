import Container from "../components/Container";
import Intro from "../components/Intro";
import Head from "next/head";
import Image from "next/image";
import ProfileAvatar from "../public/avatars/JensMou.png";
import Emoji from "../components/Emoji";

const Index = () => {
  return (
    <>
      <Head>
        <title>Mou Dev - Home</title>
      </Head>
      <Container>
        <div className="flex flex-col justify-center sm:mt-40">
          <Intro
            title={
              <span>
                Hello!
                <Emoji symbol="👽" label="Alien"></Emoji>
              </span>
            }
            centered
            colorfull
          />
          <p className="text-2xl sm:text-6xl sm:leading-normal text-center ">
            My name is <strong>Jens "Mou"</strong> and this is my personal{" "}
            <strong>Portfolio / Blog</strong> <br />
            <br />
            <div className="w-44 mt-10 mx-auto">
              <Image alt="Profile avatar of me" src={ProfileAvatar} />
            </div>
            <strong>Original</strong> <span className="italic">... right?</span>{" "}
          </p>
        </div>
      </Container>
    </>
  );
};

export default Index;
