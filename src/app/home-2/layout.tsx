import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home V2 | Flora",
  description: "Flora - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
