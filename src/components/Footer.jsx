import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <ul className="-my-1 flex justify-center space-x-6">
              <li>
                <Link href="#features">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Features
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#pricing">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Pricing
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex space-x-6">
      
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Cheetcodes. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
