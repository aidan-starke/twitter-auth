import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const { NEXTAUTH_SECRET, TWITTER_ID, TWITTER_SECRET }: any = process.env;

export default NextAuth({
	secret: NEXTAUTH_SECRET,
	providers: [
		TwitterProvider({
			clientId: TWITTER_ID,
			clientSecret: TWITTER_SECRET,
			version: "2.0",
		}),
	],
});
