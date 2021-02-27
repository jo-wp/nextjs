import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
          })
    ],
    callbacks:{
        async signIn(user, account, profile) {
            return true
          },
          async redirect(url, baseUrl) {
            return 'http://192.168.0.33:3000'
          },
          async session(session, user) {
            return session
          },
          async jwt(token, user, account, profile, isNewUser) {
            return token
          }
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', 
        verifyRequest: '/auth/verify-request',
        newUser: null 
    }
}

export default (req, res) => NextAuth(req, res, options)