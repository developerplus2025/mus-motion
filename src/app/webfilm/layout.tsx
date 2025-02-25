import type { Metadata } from "next";
import { Navigation } from "./components/Navigation";
import "./components/carousel/css/base.css";
import "./components/carousel/css/sandbox.css";
import "./components/carousel/css/embla.css";
export const metadata: Metadata = {
  title: "WebFilm",
  description: "MusicHub App",
};
export default function WebFilmLayout({
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
