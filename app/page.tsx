// app/page.tsx
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>Interesting gene names</h1>
      <ul>
        <li>
          <Link href="tair">TAIR genes</Link>
        </li>
        <li>
          <Link href="flybase">FlyBase genes</Link>
        </li>
      </ul>
    </div>
  );
}
