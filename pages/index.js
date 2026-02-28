import Head from 'next/head'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>ITZFIZZ — Smart Last-Mile Delivery</title>
        <meta name="description" content="Scroll-driven hero section animation built with Next.js, GSAP, and Tailwind CSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  )
}
