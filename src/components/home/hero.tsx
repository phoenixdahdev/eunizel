'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.png"
          alt="House with solar panels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="mb-6 font-mono text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-white">Power Your Home with</span>
          <br />
          <span className="text-white">Clean </span>
          <span className="text-[#ffa522]">Solar Energy</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Save thousands on your electricity bills while helping the
          environment. Join over 10,000 homeowners who've made the switch to
          solar.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Link href="mailto:hello@eunizel.com">
            <motion.button
              className="w-full rounded-lg bg-white px-8 py-3 text-base font-medium text-[#099250] sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Request Quote
            </motion.button>
          </Link>
          {/* <motion.button
            className="w-full rounded-lg border-2 border-white bg-white px-8 py-3 text-base font-medium text-[#099250] sm:w-auto"
            whileHover={{
              scale: 1.05,
              y: -2,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Contact Us
          </motion.button> */}
        </motion.div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
