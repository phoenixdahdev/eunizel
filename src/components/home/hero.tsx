'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="mb-6 font-mono text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-[#099250]">Power Your Home with</span>
          <br />
          <span className="text-[#099250]">Clean </span>
          <span className="text-black">Solar Energy</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl font-sans text-base leading-relaxed text-[#667085] md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Save thousands on your electricity bills while helping the
          environment. Join over 10,000 homeowners who've made the switch to
          solar.
        </motion.p>

        <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.button className="w-full cursor-pointer rounded-lg bg-[#099250] px-8 py-3 text-base font-medium text-white sm:w-auto">
            Request Quote
          </motion.button>
          <motion.button className="w-full cursor-pointer rounded-lg border border-[#099250] bg-white px-8 py-3 text-base font-medium text-[#099250] sm:w-auto">
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 md:h-[500px] md:w-[1000px] lg:h-[600px] lg:w-[1200px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
      >
        <div className="h-full w-full rounded-t-full bg-[#e6f7ed] opacity-40" />
      </motion.div>
    </section>
  )
}
