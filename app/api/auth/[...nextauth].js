import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authOptions } from "@/app/lib/auth";

import NextAuth from "next-auth/next";

// const handler = NextAuth(authOptions);

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin/",
    error: "/auth/signin", // Error code passed in query string as ?error=
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@example.com");
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
};

export default NextAuth(authOptions);
