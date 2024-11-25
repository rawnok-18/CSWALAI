import Link from 'next/link'
import { useState } from 'react'
import ThemeToggleButton from './mode-changing-button'
const NavbarOld = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="https://sun-flow.vercel.app/">
                  💛 About Me
                  {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          */}
                </Link>{' '}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <ThemeToggleButton />
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className=" px-2 pt-2 pb-3 p space-y-4 sm:px-3">
          <Link href="/">
            💛 About Me
            {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          */}
          </Link>
          <div className="pl-2"></div>
          <Link href="/contact">
            📧 Contact
            {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          */}
          </Link>
          {/* More navigation items */}
        </div>
      </div>
    </nav>
  )
}

export default NavbarOld