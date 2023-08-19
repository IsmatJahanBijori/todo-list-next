import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
// const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <div className='font-serif'>
      <Head>
        <title>ToDoList</title>
      </Head>
      <main
        className="flex flex-col justify-between p-10"
      >
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
