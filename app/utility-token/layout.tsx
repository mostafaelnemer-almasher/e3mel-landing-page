import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utility Token | E3MEL Token",
  description:
    "Explore the comprehensive utilities of E3mel Business Token (EBT) including staking rewards, tuition discounts, NFT certificates, and governance features that power the E3mel Business ecosystem.",
};

export default function UtilityTokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
