import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Browse | Flora",
  description: "Flora - Browse",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
