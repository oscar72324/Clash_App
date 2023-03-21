import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}
