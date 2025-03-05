import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Radio | Flora",
  description: "Flora - Radio",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center pt-[7rem]">
      {children}
    </section>
  );
}
