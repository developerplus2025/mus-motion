import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | Flora",
  description: "Flora - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
