// app/page.tsx
import Link from "next/link";

export default async function Page() {
  return (
    <div style={{ maxWidth: 800 }}>
      <h1>Interesting gene names</h1>

      <h3>Background</h3>
      <p>
        In order to create these pages, I downloaded gene lists using different
        methods from model organism databases and then filtered out sort of
        uninteresting terms, removed duplicates, etc to try to mostly filter out
        the uniquely interesting gene symbols and names.
      </p>
      <ul>
        <li>
          <Link href="tair">A. thaliana genes (TAIR)</Link>
        </li>
        <li>
          <Link href="flybase">D. melanogaster genes (FlyBase)</Link>
        </li>
        <li>
          <Link href="wormbase">C. elegans genes (WormBase)</Link>
        </li>
        <li>
          <Link href="mgi">M. musculus genes (MouseMine/MGI)</Link>
        </li>
        <li>
          <Link href="zfin">D. rerio (ZFIN/AllianceMine)</Link>
        </li>
        <li>
          <Link href="yeast">S. cerevisiae (Yeast/AllianceMine)</Link>
        </li>
      </ul>
      <a href="https://github.com/cmdcolin/genes">Github</a>
    </div>
  );
}
