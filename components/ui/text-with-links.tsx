import Link from "next/link";
import { ReactNode } from "react";

// Regular expressions to match URLs and emails
const URL_REGEX = /(https?:\/\/[^\s]+)/g;
const EMAIL_REGEX = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

/**
 * Converts text containing URLs and emails into JSX elements with clickable links
 * @param text - The text that may contain URLs and emails
 * @param className - Optional CSS class for the links
 * @returns JSX element with URLs and emails converted to Link components
 */
export function parseTextWithLinks(
  text: string,
  className?: string
): ReactNode {
  // Combined regex to match both URLs and emails
  const combinedRegex =
    /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(combinedRegex);

  return parts.map((part, index) => {
    // Check if it's a URL
    if (URL_REGEX.test(part)) {
      // Reset the regex for the next test
      URL_REGEX.lastIndex = 0;

      return (
        <Link
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-600 hover:text-blue-800 underline transition-colors ${
            className || ""
          }`}
        >
          {part}
        </Link>
      );
    }

    // Check if it's an email
    if (EMAIL_REGEX.test(part)) {
      // Reset the regex for the next test
      EMAIL_REGEX.lastIndex = 0;

      return (
        <Link
          key={index}
          href={`mailto:${part}`}
          className={`text-blue-600 hover:text-blue-800 underline transition-colors ${
            className || ""
          }`}
        >
          {part}
        </Link>
      );
    }

    return part;
  });
}

/**
 * Component that renders text with auto-detected links
 */
export function TextWithLinks({
  children,
  className,
  linkClassName,
}: {
  children: string;
  className?: string;
  linkClassName?: string;
}) {
  return (
    <span className={className}>
      {parseTextWithLinks(children, linkClassName)}
    </span>
  );
}
