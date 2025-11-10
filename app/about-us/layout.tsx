import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | E3MEL Token",
  description:
    "Learn about E3mel Business Token (EBT) and our mission to democratize career growth through blockchain technology and educational services across the MENA region.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
