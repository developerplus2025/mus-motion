import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ChatV2 | Flora",
  description: "Flora - ChatV2",
};
export default function ChatV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-screen w-full">{children}</section>;
}
