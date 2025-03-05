import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Flora WebApp",
  description: "Flora WebApp",
};
export default function FloraWebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
