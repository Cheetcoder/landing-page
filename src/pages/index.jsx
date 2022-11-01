import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { About } from '@/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Live online course to help you prepare for FANG whiteboard interviews. </title>
        <meta
          name="description"
          content="Live online course to help you prepare for FANG whiteboard interviews.."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
        <About />
        <Pricing />
        <Faqs />

      </main>
      <Footer />
    </>
  )
}
