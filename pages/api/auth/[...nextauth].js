import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const GithubID = process.env.GITHUB_ID;
const GithubSecret = process.env.GITHUB_SECRET;

const GoogleID = process.env.GOOGLE_CLIENT_ID;
const GoogleSecret = process.env.GOOGLE_CLIENT_SECRET;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GithubID,
      clientSecret: GithubSecret,
    }),
    GoogleProvider({
      clientId: GoogleID,
      clientSecret: GoogleSecret,
      // https://next-auth.js.org/providers/google
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          image: profile.picture,
          email: profile.email,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
