import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginAPI } from './lib/Login.action';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials: any) => {
        // Convert users from JSON to Array
        // const users = Array.isArray(database.users) ? database.users : [];

        const res = await LoginAPI(credentials.email, credentials.password);

        if (res.error && res.message) {
          throw new Error(res.message);
        }

        return res;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as any;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
});
