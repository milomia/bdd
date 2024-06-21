import LoginForm from "../components/login-form"
import Head from 'next/head';

export default function Login() {
  return (
 <>
 <Head>
  <title>Login page</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
 <LoginForm />
 </>
  )
}
