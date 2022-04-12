import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import GTALogo from "../public/gta-logo.svg";
import CSGOLogo from "../public/csgo-logo.svg";
import LoLLogo from "../public/lol-logo.svg";
import ValorantLogo from "../public/valorant-logo.svg";
import PokemonLogo from "../public/pokemon-logo.svg";
import RatchetClankLogo from "../public/ratchet-clank-logo.svg";
import Footer from "../components/footer";
import Layout from "../components/layout";
import ProjectItem from "../components/project";
import { getAllProjects } from "../lib/api";
import { Project } from "../lib/interfaces";

interface Props {
  allProjects: Project[];
}

export default function Home({ allProjects }: Props) {
  return (
    <Layout>
      <Head>
        <title>ric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-wrap-reverse">
          <div className="mr-8">
            <h1 className="text-4xl font-bold my-6">[ric]nuno</h1>
            <p className="my-4">
              Software Engineer at <b>Critical Techworks(BMW)</b>
            </p>
            <p className="max-w-lg leading-6 my-4">
              I like backend dev, a little of frontend,a little of graphics
              programming,a little of game programming... I LIKE A LOT OF THINGS
              OK.
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src={profilePic}
              alt="My profile pic"
              width={128}
              height={128}
            />
          </div>
        </div>

        <div className="flex gap-x-4">
          <a href="https://github.com/ricardonunosr">
            <FontAwesomeIcon icon={faGithub} width={25} />
          </a>
          <a href="https://twitter.com/ricardonunosr">
            <FontAwesomeIcon icon={faTwitter} width={25} />
          </a>
          <a href="https://www.linkedin.com/in/ricardonunosr/">
            <FontAwesomeIcon icon={faLinkedin} width={25} />
          </a>
        </div>

        <div className="my-4">
          <h3>Games of choice:</h3>
          <div className="flex flex-wrap gap-x-12 sm:gap-x-2 ">
            <GTALogo width={45} height={45} />
            <PokemonLogo width={45} height={45} />
            <LoLLogo width={45} height={45} />
            <ValorantLogo width={45} height={45} />
            <CSGOLogo width={45} height={45} />
            <RatchetClankLogo width={45} height={45} />
          </div>
        </div>

        <div className="bg-zinc-50 h-6 border-y border-zinc-200"></div>

        {allProjects.map((project, i) => {
          return <ProjectItem key={i} project={project} />;
        })}
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = await getAllProjects([
    "title",
    "date",
    "tags",
    "slug",
    "coverImage",
    "excerpt",
    "content",
    "githubRepo",
  ]);

  return {
    props: { allProjects },
  };
}
