/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/layout.tsx";
import { Head } from "https://deno.land/x/fresh@1.0.1/runtime.ts";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ric</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ricardo's random links"></meta>
      </Head>
      <h1 class={tw`font-bold`}>Good reads/ideas</h1>
      <ul class={tw`list-disc ml-8`}>
        <li>
          <a
            class={tw`hover:text-blue-500`}
            href="https://users.ece.utexas.edu/~adnan/pike.html"
          >
            Rob Pike's Rules of Programming
          </a>
        </li>
        <li>
          <a
            class={tw`hover:text-blue-500`}
            href="https://www.youtube.com/watch?v=QM1iUe6IofM"
          >
           Object-Oriented Programming is Bad - Brian Will
          </a>
        </li>
        <li>
          <a
            class={tw`hover:text-blue-500`}
            href="https://www.youtube.com/watch?v=7Nj9ZjwOdFQ"
          >
           Life as a developer - James Mickens 
          </a>
        </li>
      </ul>
      <h1 class={tw`font-bold`}>Useful links</h1>
      <ul class={tw`list-disc ml-8`}>
        <li>
          <a
            class={tw`hover:text-blue-500`}
            href="https://casual-effects.com/data/"
          >
            McGuire Computer Graphics Archive
          </a>
        </li>
        <li>
          <a
            class={tw`hover:text-blue-500`}
            href="https://glslsandbox.com/"
          >
           GLSL Sandbox 
          </a>
        </li>
      </ul>
    </Layout>
  );
}
