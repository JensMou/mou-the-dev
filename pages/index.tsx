import Container from "../components/Container";
import Intro from "../components/Intro";
import Head from "next/head";
import Emoji from "../components/Emoji";
import Image from "next/image";

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
                    <p className="text-2xl sm:text-6xl sm:leading-normal text-center">
                        My name is <strong>Jens &quot;Mou&quot;</strong> and
                        this is my personal <strong>Portfolio / Blog</strong>{" "}
                        <br />
                        <br />
                        <strong>Original</strong>{" "}
                        <span className="italic">... right?</span>{" "}
                    </p>
                    <div className="text-center">
                        <Image
                            alt="Profile avatar of me"
                            src="/avatars/JensMou.png"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Index;
