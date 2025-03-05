import type { Metadata } from "next";
import { Navigation } from "./components/Navigation";
export const metadata: Metadata = {
  title: "WebFilm",
  description: "MusicHub App",
};
export default function WebSexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  );
}
