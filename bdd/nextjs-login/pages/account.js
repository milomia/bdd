import Account from "../components/account"
import Head from 'next/head';

export default function PageAccount() {
  return (
 <>
 <Head>
  <title>Account Page</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
 <Account />
 </>
  )
}