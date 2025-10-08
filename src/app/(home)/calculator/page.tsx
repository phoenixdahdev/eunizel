import React from 'react'
import { LoadCalculator } from './load-calculator'

const page = () => {
  return (
    <>
      <section className="bg-[#095c37] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-mono text-4xl font-bold text-balance md:text-5xl">
            Load Calculator
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Select the type of load you wish to connect to the Inverter to
            calculate the estimated rating of the Inverter you need. We
            recommend that you take into account your necessity in peak
            conditions. This will help you to derive a more accurate rating that
            you would require in such a condition.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <main className="flex-1 bg-[#f9fafb] py-12">
        <div className="container mx-auto px-4">
          <LoadCalculator />
        </div>
      </main>
    </>
  )
}

export default page
