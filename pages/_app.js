import { Inter } from 'next/font/google'
import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import '../public/assets/css/animate.min.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/css/fontawesome-all.min.css'
import '../public/assets/css/imageRevealHover.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/main.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/spacing.css'
import '../public/assets/css/swiper-bundle.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={inter.variable}>
      {!loading ? <Component {...pageProps} /> : <Preloader />}
    </main>
  )
}

export default MyApp