import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="text-left mt-4 text-lg tracking-tight text-white">
          We rely on reverse classroom with an emphasis on active learning. 

This basically means I will be providing the material that we will be working on ahead of time and and it will be up to you to spend the required time to go over it it. 

During our time together I will be helping groups build go through activities and discussions to help solidify the concepts learned during the day. 
          </p>


          <ButtonLink href="https://docs.google.com/forms/d/13IUKfB9sJkypCWi-54Zj-htNBGBM71CVxjtfyxySSDk" color="white" className="mt-10">
            Sign Up Today
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
