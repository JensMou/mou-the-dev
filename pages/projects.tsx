import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroProject from "../components/hero-project";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import Project from "../types/project";

type Props = {
  allProjects: Project[];
};

const Projects = ({ allProjects }: Props) => {
  const heroProject = allProjects[0];
  const moreProjects = allProjects.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - Projects</title>
        </Head>
        <Container>
          <Intro title="Projects." />
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              author={heroProject.author}
              slug={heroProject.slug}
              excerpt={heroProject.excerpt}
            />
          )}
          {moreProjects.length > 0 && <MoreStories projects={moreProjects} />}
        </Container>
      </Layout>
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
};
