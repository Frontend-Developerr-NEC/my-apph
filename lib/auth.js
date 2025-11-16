// import { NextAuthOptions, User, getServerSession } from "next-auth";
// // import { useSession } from "next-auth/react";
// // import { redirect } from "next/navigation";    

// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// // import credentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
    
//   providers: [
//     CredentialsProvider({
//       name: "sign in",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//     //   async authorize(credentials) {
//     //     const users = JSON.parse(localStorage.getItem("User") || "[]");

//     //     const user = users.find(
//     //       (user) =>
//     //         user.Username === credentials?.username &&
//     //         user.Email === credentials?.email &&
//     //         user.Password === credentials?.password
//     //     );

//     //     if (user) {
//     //       return user;
//     //     } else {
//     //       return null;
//     //     }
//     //   },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
//   // secret: process.env.NEXTAUTH_SECRET,
// };

// export async function getAuthSession() {
//   return await getServerSession(authOptions);
// }
