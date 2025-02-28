
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./lib/db"
import { accounts, sessions, users, verificationTokens } from "./lib/db/schema"
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
})