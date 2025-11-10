import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | E3MEL Token",
  description:
    "Learn about how E3MEL Token protects your personal information and ensures transparency in data collection, use, and safeguarding within our platform and token ecosystem.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
