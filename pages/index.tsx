import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfileAvatar from "../public/avatars/JensMou.png";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - Home</title>
        </Head>
        <Container>
          <div className="flex flex-col h-80v justify-center">
            <Intro title="Hello!" centered colorfull />
            <p className="text-xl text-center leading-10">
              I'm a <strong>frontend developer</strong> working in{" "}
              <strong>web development</strong>, <br /> inpired by{" "}
              <strong>great team dynamics</strong>, <strong>new tech</strong>{" "}
              and <strong>other developers</strong>.
              <br />
              This is my personal <strong>portfolio/blog</strong>. <br />
              <strong>Original</strong>... right?
            </p>
            <div className="w-44 mt-10 mx-auto">
              <Image src={ProfileAvatar} />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
