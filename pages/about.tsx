import Container from "../components/Container";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import RatingStars from "../components/RatingStars";

type SkillArrProp = {
  title: string;
  rating: number;
};
const skillArr: SkillArrProp[] = [
  { title: "JavaScript", rating: 6 },
  { title: "React", rating: 6 },
  { title: "CSS", rating: 5 },
  { title: "TypeScript", rating: 5 },
  { title: "NextJS", rating: 3 },
];

const About = () => {
  return (
    <>
      <Head>
        <title>Mou Dev - About</title>
      </Head>
      <Container>
        <Intro title="About" />
        <dl>
          {skillArr.map((e, i) => (
            <div key={e.title + i}>
              <dt>{e.title}</dt>
              <dd>
                <RatingStars rating={e.rating} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </>
  );
};

export default About;
