import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Download",
  description: "Flora",
};
export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
