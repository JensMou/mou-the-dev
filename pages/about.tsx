import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout/layout";
import Head from "next/head";
import Star from "../public/icons/star.svg";
import classNames from "classnames";

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
      <Layout>
        <Head>
          <title>Mou Dev - About</title>
        </Head>
        <Container>
          <Intro title="About" />
          <dl>
            {skillArr.map((e, i) => (
              <>
                <dt>{e.title}</dt>
                <dd>
                  <RatingStars rating={e.rating} />
                </dd>
              </>
            ))}
          </dl>
        </Container>
      </Layout>
    </>
  );
};

type RatingStarsProps = {
  rating: number;
};
const RatingStars = ({ rating }: RatingStarsProps): React.ReactElement => {
  const numberOfStars = 6;
  return (
    <div className="flex">
      {[...Array(numberOfStars)].map((e, i) => {
        return (
          <div className="w-10 mr-2 my-2">
            <Star
              key={i + "star"}
              className={rating >= i + 1 ? "text-golden" : "text-lightgrey"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default About;
