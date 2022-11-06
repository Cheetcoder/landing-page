import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What are the hours for cohort 4?',
      answer:
        'We will meet from 7:00 AM PST to 7:00 PM PST.',
    },
    {
      question: 'What is the first day of the cohort? ',
      answer: 'Sunday November 13 via Zoom at 7:00 AM PST.',
    },
    {
      question: 'What is the last day of the cohort? ',
      answer: 'The official last day is December 25 but historically we continue until most student obtain a job.',
    },
    {
      question: 'What am I expected to bring?',
      answer:
        'At a minimum you must have a stable internet connection, some foundational programming skills.',
    },
  ],
  [
    {
      question: 'I have a vacation planned during your cohort can I miss days?',
      answer:
        'This is a very strict program and unexcused absences will not be tolerated. It is expected that you will be coming into the cohort and give it your 110% every day.',
    },
    {
      question:
        'Can I bring a study buddy or friend?',
      answer:
        'Yes, but be adviced that partners will be rebalanced as needed.',
    },
    {
      question:
        'What is the current success rate?',
      answer:
        'We currently do not track success and failure rates but our FAANG pass rates are currently at around 90% (Not everyone is interested in interviewing for a FAANG company)',
    },
  ],
  [
    {
      question: 'What programming language do I need to know?',
      answer:
        'So far we have had people complete the program using Javascript, Python, Java, Go, and Swift.',

    },
    
    
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
