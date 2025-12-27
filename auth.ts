import type { NextAuthOptions, Session } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// create server auth function
// import type {
//   GetServerSidePropsContext,
//   NextApiRequest,
//   NextApiResponse,
// } from "next";
// import { getServerSession } from "next-auth";

export const config: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        return {
          id: "",
          name: "",
        //   image: "",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Set this in .env.local
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      console.log(
        "=====================================signIn=========================================="
      );
      console.log("signIn - account", account);
      console.log("signIn - profile", profile);
      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log(
        "=====================================jwt=========================================="
      );
      console.log("jwt", token);
      console.log("jwt", user);
      console.log("jwt", account);
      console.log("jwt", profile);

      if (user) {
        token = {
          ...token,
          ...user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      console.log(
        "=====================================session=========================================="
      );

      console.log("session", session);
      console.log("session", token);

      return session;
    },
  },
  pages: {
    signIn: "/system/login", // Custom login page (optional)
    error: "/system/login", // Custom error page (optional)
  },
};
