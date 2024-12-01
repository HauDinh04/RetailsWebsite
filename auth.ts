import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import database from '@/server/database.json';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {}
      },
      authorize: async credentials => {
        // Convert users from JSON to Array
        const users = Array.isArray(database.users) ? database.users : [];
        let user = users.find(user => user.email === credentials.email);

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error('Tài khoản không tồn tại.');
        }

        if (user.password !== credentials.password) {
          throw new Error('Mật khẩu không đúng.');
        }

        // return user object with their profile data
        return user;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
});
