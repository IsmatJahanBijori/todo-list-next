import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className='font-serif'>
      <Head>
      <title>ToDoList</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>)
}
