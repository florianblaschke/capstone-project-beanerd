import NextAuth from "next-auth";
import dbConnect from "@/db/connect";
import User from "@/db/models/user";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        await dbConnect();
        if (!dbConnect) {
          throw new Error({ error: "No connection to database!" });
        }

        const loginUser = await User.findOne({ name: credentials.name });
        if (!loginUser) {
          return res
            .status(400)
            .json({ message: "No user with this name! Please sign up!" });
        }

        if (credentials.password !== loginUser.password) {
          return res
            .status(401)
            .json({ message: "Password or Username is wrong!" });
        }

        return loginUser;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const { name } = token.user;
      const user = { name };
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
