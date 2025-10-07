'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap } from 'lucide-react'

const features = [
  {
    title: 'Reliable Power Solutions',
    description:
      "We design and install dependable solar systems that keep your home, office, or business powered at all times. Whether it's for backup during outages or a complete off-grid solution, we ensure you enjoy uninterrupted energy.",
  },
  {
    title: 'Cost Savings That Last',
    description:
      "With rising electricity costs, our solar solutions are built to help you save money month after month. From day one, you'll notice reduced utility bills, and over time, the system pays for itself while continuing to generate free energy.",
  },
  {
    title: 'Proven Quality & Expertise',
    description:
      'Our team consists of trained professionals who use only high-quality solar panels, inverters, and batteries from trusted brands. Every installation is carried out with precision to guarantee efficiency and durability.',
  },
  {
    title: 'Cutting-Edge Innovation',
    description:
      'We bring you the latest in solar technology, including energy storage and smart monitoring, so you can track and optimize your energy usage from anywhere.',
  },
  {
    title: 'Dedicated Support & Service',
    description:
      "Our relationship doesn't end after installation. We provide continuous maintenance, technical support, and after-sales care to make sure your system performs at its best for years to come.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/why.png"
          alt="Solar panels background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="mb-6 font-mono text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Why Choose Us
          </h2>
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-white/90 md:text-xl">
            We take pride in delivering high-quality, future-proof renewable
            energy solutions. With years of experience and a team of certified
            experts.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffa522]/10">
                <Zap className="h-6 w-6 text-[#ffa522]" fill="#ffa522" />
              </div>
              <h3 className="mb-4 font-mono text-xl font-bold text-[#050505] md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-[#787878] md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.slice(2).map((feature, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffa522]/10">
                <Zap className="h-6 w-6 text-[#ffa522]" fill="#ffa522" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#050505] md:text-3xl">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-[#787878] md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
