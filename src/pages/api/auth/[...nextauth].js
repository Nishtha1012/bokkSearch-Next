import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import connectMongo from "../../../../database/connection";
import Users from "../../../../database/model/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "connection failed...";
        });

        const user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email please signup");
        }

        const comparePassword = await compare(
          credentials.password,
          user.password
        );
        console.log(comparePassword, "==============================");

        if (!comparePassword || user.email !== credentials.email) {
          throw new Error("incorrect username or password");
        }
        return user;
      },
    }),
  ],

  secret: process.env.JWT_SECRET,
});
