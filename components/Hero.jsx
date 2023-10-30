import React from 'react'

const Hero = () => {
    return (
        <div className="mx-auto max-w-2xl pt-16 pb-32 sm:pt-24 sm:pb-48 lg:pt-28 lg:pb-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
             Introducing LoanLink the app of the future.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-4 tracking-tight text-gray-900 sm:text-6xl">
              LoanLink is a Peer-to-Peer Lending Marketplace
            </h1>
            <span className="mt-10 text-lg leading-8 text-gray-600">
           Fuel Your Business Growth with LoanLink with low-interest loan to propel  Your business to new heights.Join our lending marketplace Today!
                    </span>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/auth/register"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Hero
