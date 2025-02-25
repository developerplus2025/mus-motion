import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generation | Flora",
  description: "Flora - Generation",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
