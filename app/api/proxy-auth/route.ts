import { authConfig } from "@/config/auth";
import { parseCustomHeaders } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[0];
  const customHeadersStr = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[1];
  const customHeaders = parseCustomHeaders(customHeadersStr);

  const session = await getServerSession(authConfig);
  if (!session || !session.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = session.accessToken;
  try {
    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true", // Required for ngrok tunnels
          ...customHeaders,
        },
      }
    );

    const result = await response.json();
    return Response.json(result, { status: response.status });
  } catch (error) {
    console.error(`Error in GET ${targetURL}:`, error);
    return Response.json(
      {
        error: "Proxy request failed",
        message: error instanceof Error ? error.message : String(error),
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[0];
  const customHeadersStr = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[1];
  const customHeaders = parseCustomHeaders(customHeadersStr);

  const session = await getServerSession(authConfig);
  if (!session || !session.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = session.accessToken;

  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...customHeaders,
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result, { status: response.status });
  } catch (error) {
    console.error(`Error in POST ${targetURL}:`, error);
    return Response.json(
      {
        error: "Proxy request failed",
        message: error instanceof Error ? error.message : String(error),
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[0];
  const customHeadersStr = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[1];
  const customHeaders = parseCustomHeaders(customHeadersStr);

  const session = await getServerSession(authConfig);
  if (!session || !session.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = session.accessToken;

  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...customHeaders,
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result, { status: response.status });
  } catch (error) {
    console.error(`Error in PUT ${targetURL}:`, error);
    return Response.json(
      {
        error: "Proxy request failed",
        message: error instanceof Error ? error.message : String(error),
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[0];
  const customHeadersStr = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[1];
  const customHeaders = parseCustomHeaders(customHeadersStr);

  const session = await getServerSession(authConfig);
  if (!session || !session.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = session.accessToken;

  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...customHeaders,
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result, { status: response.status });
  } catch (error) {
    console.error(`Error in PATCH ${targetURL}:`, error);
    return Response.json(
      {
        error: "Proxy request failed",
        message: error instanceof Error ? error.message : String(error),
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[0];
  const customHeadersStr = decodeURIComponent(
    url.search.replace("?target=", "")
  ).split("&customHeaders=")[1];
  const customHeaders = parseCustomHeaders(customHeadersStr);

  const session = await getServerSession(authConfig);
  if (!session || !session.accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const accessToken = session.accessToken;

  try {
    // DELETE requests typically don't have a body, so only parse JSON if content exists
    let body = null;
    const contentLength = request.headers.get("content-length");
    const hasContent = contentLength && parseInt(contentLength) > 0;

    if (hasContent) {
      try {
        body = await request.json();
      } catch {
        // If JSON parsing fails, continue with null body
        console.warn(
          "[PROXY-AUTH] Failed to parse JSON body for DELETE request, continuing without body"
        );
      }
    }

    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...customHeaders,
        },
        ...(body && { body: JSON.stringify(body) }),
      }
    );

    const result = await response.json();
    return Response.json(result, { status: response.status });
  } catch (error) {
    console.error(`Error in DELETE ${targetURL}:`, error);
    return Response.json(
      {
        error: "Proxy request failed",
        message: error instanceof Error ? error.message : String(error),
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
