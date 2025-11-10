declare module "next-auth" {
  interface User {
    address: string;
    accessToken: string;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken: string;
    chainId: number;
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    address: string;
    accessToken: string;
  }
}

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  accessToken: string;
  address: string;
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        message: { label: "message", type: "text" },
        signature: { label: "signature", type: "text" },
      },
      authorize: async (
        credentials: Record<"message" | "signature", string> | undefined
      ): Promise<User | null> => {
        if (!credentials) {
          console.error("No credentials provided");
          return null;
        }

        try {
          // TODO: Replace with your backend auth endpoint
          return {
            accessToken: "dummy_access_token",
            address: "0xDummyAddress",
            id: "1",
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  session: {
    maxAge: 1 * 24 * 60 * 60, // 1 day
    strategy: "jwt",
  },
  pages: {
    error: "/auth/unauthorized",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.address = user.address;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.address = token.address;
      return session;
    },
  },
};
