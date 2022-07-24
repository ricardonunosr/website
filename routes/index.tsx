/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/layout.tsx";
import { Head } from "https://deno.land/x/fresh@1.0.1/runtime.ts";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ric</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ricardo's home on the web"></meta>
      </Head>
      <main>
        <div class={tw`flex flex-wrap-reverse`}>
          <div class={tw`mr-8`}>
            <h1 class={tw`text-4xl font-bold my-6`}>[ric]nuno</h1>
            <p class={tw`my-4`}>
              Software Engineer at <b>Critical Techworks(BMW)</b>
            </p>
            <p class={tw`max-w-lg leading-6 my-4`}>
              I like backend dev, a little of frontend, a little of graphics
              programming, a little of game programming... I LIKE A LOT OF
              THINGS OK.<br />{" "}
              At the moment looking into self-driving cars/computer vision.
            </p>
          </div>
          <div class={tw`flex items-center`}>
            <img
              class={tw`rounded-full`}
              src="./me.jpeg"
              alt="My profile pic"
              width={128}
              height={128}
            />
          </div>
        </div>

        <div class={tw`flex gap-x-4`}>
          <a href="https://github.com/ricardonunosr">
            <img src="./github.svg" width={25} height={25} alt="GitHub Logo" />
          </a>
          <a href="https://twitter.com/ricardonunosr">
            <img
              src="./twitter.svg"
              width={25}
              height={25}
              alt="Twitter Logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/ricardonunosr/">
            <img
              src="./linkedin.svg"
              width={25}
              height={25}
              alt="LinkedIn Logo"
            />
          </a>
          <a href="/cv.pdf">
            CV
          </a>
		  <a 
		    class={tw`text-gray-200 underline tracking-wide italic hover:text-blue-500`}
            href="/random"> 
		   random
	      </a>
        </div>

        <div class={tw`my-4`}>
          <h2>Games of choice:</h2>
          <div class={tw`flex flex-wrap gap-x-12 sm:gap-x-2`}>
            <img src="./gta-logo.svg" width={45} height={45} alt="GTA Logo" />
            <img
              src="./pokemon-logo.svg"
              width={45}
              height={45}
              alt="Pokemon Logo"
            />
            <img src="./lol-logo.svg" width={45} height={45} alt="LoL Logo" />
            <img
              src="./valorant-logo.svg"
              width={45}
              height={45}
              alt="Valorant Logo"
            />
            <img src="./csgo-logo.svg" width={45} height={45} alt="CSGO Logo" />
            <img
              src="./ratchet-clank-logo.svg"
              width={45}
              height={45}
              alt="Ratchet Clank Logo"
            />
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
