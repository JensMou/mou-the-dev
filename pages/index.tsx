import Container from "../components/Container2";
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
        <div className="flex flex-col h-80v justify-center">
          <Intro
            title={
              <span>
                Hello! <Emoji symbol="👽" label="Alien"></Emoji>
              </span>
            }
            centered
            colorfull
          />
          <p className="text-2xl leading-10 md:text-2xl md:leading-10 text-center ">
            My name is <strong>Jens "Mou"</strong> and I'm a{" "}
            <strong>Frontend Developer</strong> working in{" "}
            <strong>Web Development</strong>, <br /> inpired by{" "}
            <strong>New Tech</strong> and <strong>Learning New Stuff</strong>
            <br />
            This is my personal <strong>Portfolio / Blog</strong>
            <br />
            <strong>Original</strong>
            <span className="italic">... right?</span>
          </p>
          <div className="w-44 mt-10 mx-auto">
            <Image alt="Profile avatar of me" src={ProfileAvatar} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Index;
