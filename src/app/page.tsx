import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <ul className="m-auto flex flex-col items-center">
        <Link href="/text-message">Generate Text Stories</Link>
        <Link href="/confessions">Generate Confessions</Link>
        <Link href="/reddit-stories">Generate Reddit Stories</Link>
      </ul>
    </main>
  );
}
