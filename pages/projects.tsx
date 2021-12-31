import Container from "../components/Container";
import ProjectPreview from "../components/project/ProjectPreview";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import Project from "../types/project";

type Props = {
  allProjects: Project[];
};

const Projects = ({ allProjects }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mou Dev - Projects</title>
        </Head>
        <Container>
          <Intro title="Projects" />
          {allProjects.map((p) => (
            <ProjectPreview
              title={p.title}
              coverImage={p.coverImage}
              date={p.date}
              author={p.author}
              slug={p.slug}
              excerpt={p.excerpt}
            />
          ))}
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
