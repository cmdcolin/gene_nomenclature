import Link from "next/link";

export const metadata = {
  title: "Gene nomenclature",
  description: "For various organisms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home</Link>
        {children}
      </body>
    </html>
  );
}
