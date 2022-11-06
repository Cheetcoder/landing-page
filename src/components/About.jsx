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
            About Us
          </h2>
          
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We are interested in leveling the playing field by providing a free and rigorious interview prep course.
          </p>

         

          

          
        </div>
        
      </Container>
    </section>
  )
}
