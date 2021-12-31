import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { getAllProjects } from "../../lib/api";
import DateFormatter from "../../components/date-formatter";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Footer from "../../components/footer";

export default function Projects({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Projects | ric </title>
      </Head>
      <Header />
      <div className="mt-16">
        {allProjects.map((project) => (
          <div key={project.slug}>
            <Link as={`/projects/${project.slug}`} href="projects/[slug]">
              <a>
                <Image src={project.coverImage} width={400} height={225} />
              </a>
            </Link>
            <div>
              <Link as={`/projects/${project.slug}`} href="projects/[slug]">
                <a className="text-2xl font-bold">{project.title}</a>
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              <DateFormatter dateString={project.date} />
            </div>
            <p className="text-sm text-gray-500">{project.excerpt}</p>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
}
