import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

// Extend dayjs plugins
dayjs.extend(relativeTime);
dayjs.extend(duration);

interface FetchProxyProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: Record<string, unknown>;
  auth?: boolean;
  customHeaders?: Record<string, string>;
  customBaseURL?: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCustomHeaders = (
  headersStr: string | null
): Record<string, string> => {
  if (!headersStr) return {};

  try {
    const headers: Record<string, string> = {};

    // Split by either comma or ampersand
    const pairs = headersStr.split("&");

    for (const pair of pairs) {
      // Find the first equals sign to split key/value
      const equalIndex = pair.indexOf("=");
      if (equalIndex === -1) continue;

      const key = pair.substring(0, equalIndex).trim();
      const value = pair.substring(equalIndex + 1).trim();

      if (key && value) {
        // Replace + with spaces in the value (URL decoding)
        headers[key] = value.replace(/\+/g, " ");
      }
    }

    return headers;
  } catch (error) {
    console.error("Error parsing custom headers:", error);
    return {};
  }
};

export const fetchProxy = async ({
  method,
  url,
  body,
  auth,
  customHeaders,
  customBaseURL,
}: FetchProxyProps) => {
  try {
    let baseURL;
    if (customBaseURL) {
      baseURL = customBaseURL;
    } else {
      baseURL = auth
        ? `${process.env.NEXT_PUBLIC_APP_URL}/api/proxy-auth?target=${url}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/api/proxy?target=${url}`;

      if (customHeaders) {
        const customHeadersToQuery = new URLSearchParams(
          customHeaders
        ).toString();
        baseURL += `&customHeaders=${customHeadersToQuery}`;
      }
    }

    const request = await fetch(baseURL, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const response = await request.json();
    return response;
  } catch (error) {
    console.error("Error in fetchProxy:", error);
    return { success: false, message: "Proxy request failed", statusCode: 500 };
  }
};

export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
};

export const truncateWalletAddress = (address: string): string => {
  if (address.length <= 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formUrlQuery = ({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string;
}): string => {
  const currentUrl = new URLSearchParams(params);
  currentUrl.set(key, value);
  return currentUrl.toString();
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: {
  params: string;
  keyToRemove?: string;
  keysToRemove: string[];
}): string => {
  const currentUrl = new URLSearchParams(params);
  keysToRemove.forEach((key) => currentUrl.delete(key));
  const result = currentUrl.toString();
  return result;
};

export const formatDate = (
  dateString: string,
  format: string = "MMM DD, YYYY"
) => {
  return dayjs(dateString).format(format);
};

export const formatRelativeTime = (dateString: string): string => {
  return dayjs(dateString).fromNow();
};
