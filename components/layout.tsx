/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <div class={tw`w-4/5 sm:w-3/5 m-auto my-8 sm:my-16 flex flex-col`}>
      {children}
    </div>
  );
}
