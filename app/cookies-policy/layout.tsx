import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | E3MEL Token",
  description:
    "Learn about how E3MEL Token uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content on our platform.",
};

export default function CookiesPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
