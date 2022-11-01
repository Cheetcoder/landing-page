import Image from 'next/image'
import { Container } from '@/components/Container'



export function About() {
  return (
    <section
      id="about"
      aria-labelledby="testimonials-title"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Founding Story.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Cheetcodes was founded in 2020 by ex-Microsoft Software Engineers and industry professionals.
          
          We are on a mission to help people from all walks of life achieve their career goals. We provide an affordable and convenient way to prepare for your next job interview. Once you get accepted, you can learn from industry experts and get feedback from other users. We are committed to making sure everyone has access to the best resources possible!

          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700">
          We're proud to say that since we started this community, over 100 engineers have found a job they love through us. Many people who were part of our previous communities are now working at places like Amazon, Google, Bloomberg, Brex, Paypal, Spotify, and many more. 
          </p>
        </div>
        
      </Container>
    </section>
  )
}
