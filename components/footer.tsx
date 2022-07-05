/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  return (
    <footer class={tw`mt-32`}>
      <p class={tw`text-gray-400`}>
        © 2022 Copyright Ricardo Nuno{" "}
        <a href="https://twitter.com/ricardonunosr">(@ricardonunosr)</a>. All
        rights reserved.
      </p>
    </footer>
  );
}
