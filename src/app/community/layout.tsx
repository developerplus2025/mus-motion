import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community | Flora",
  description: "Flora - Community",
};
export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
