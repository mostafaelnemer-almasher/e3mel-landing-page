import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | E3MEL Token",
  description:
    "Read the terms and conditions that govern your use of the E3MEL Token platform, including purchasing, staking, and transacting with EBT tokens.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
