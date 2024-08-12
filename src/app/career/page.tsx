import Link from "next/link";

export default function Page() {
  return (
    <main className="my-10 space-y-10">
      <h1>Career Page</h1>
      <ul>
        <li>
          <Link href="/career/developer" className="underline">Developer</Link>
        </li> 
        <li>
          <Link href="/career/designer" className="underline">Designer</Link>
        </li>
        <li>
          <Link href="/career/manager" className="underline">Manager</Link>
        </li>
      </ul>
    </main>
  );
}
