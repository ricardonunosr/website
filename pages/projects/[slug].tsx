import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import ProjectBody from "../../components/ProjectBody";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({ project }: any) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{project.title} | ric </title>
      </Head>
      <Header slug={project.slug} />
      <article className="mt-5">
        <div className="flex items-center">
          <h1 className="text-3xl my-6 font-bold mr-6">{project.title}</h1>
          {project.githubRepo && (
            <a href="https://github.com/ricardonunosr/valiance">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
        </div>
        <ProjectBody content={project.content} />
      </article>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "githubRepo",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
