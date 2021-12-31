import Link from "next/link";

export default function Header({ slug }: any) {
  return (
    <div>
      <span className="font-bold"> / </span>
      <Link href="/">
        <a className="font-bold border-b-2 border-black pb-1">ric</a>
      </Link>
      {slug && (
        <>
          <span className="font-bold"> / </span>
          <Link href="/projects">
            <a className="font-bold border-b-2 border-black pb-1">projects</a>
          </Link>
        </>
      )}
    </div>
  );
}
