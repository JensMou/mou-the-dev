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
            My name is Jens and I'm a <strong>frontend developer</strong>{" "}
            working in <strong>web development</strong>, <br /> inpired by{" "}
            <strong>great team dynamics</strong>, <strong>new tech</strong> and{" "}
            <strong>other developers</strong>.
            <br />
            This is my personal <strong>portfolio/blog</strong>. <br />
            <strong>Original</strong>... right?
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
