import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Opportunity | E3MEL Token",
  description:
    "Discover the global market opportunity in e-learning and Web3 education. Learn how E3MEL Token is positioned to lead the transformation from traditional education to tokenized learning models.",
};

export default function MarketOpportunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
