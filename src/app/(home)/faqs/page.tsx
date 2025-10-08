'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'HOW MUCH CAN I SAVE WITH SOLAR ENERGY?',
    answer:
      'Your savings depend on your current electricity usage and system size. Most of our clients see up to 40-70% reduction in monthly electricity bills, and the system often pays for itself within a few years.',
  },
  {
    question: "WHAT HAPPENS WHEN THERE'S NO SUNLIGHT OR DURING THE NIGHT?",
    answer:
      "During nighttime or cloudy days, your solar system can draw power from the grid if you're connected, or from battery storage if you have a backup system. Hybrid systems ensure you always have power when you need it.",
  },
  {
    question: 'HOW LONG DO SOLAR PANELS LAST?',
    answer:
      'Quality solar panels typically last 25-30 years or more. Most manufacturers offer warranties of 25 years, and panels continue to produce electricity beyond that, though at slightly reduced efficiency.',
  },
  {
    question: "WILL SOLAR WORK IF I'M STILL CONNECTED TO THE GRID?",
    answer:
      'Yes! Grid-tied solar systems are the most common setup. You can use solar power during the day and draw from the grid when needed. Excess energy can often be sold back to the grid through net metering programs.',
  },
  {
    question: 'HOW DO I KNOW WHAT SYSTEM IS RIGHT FOR ME?',
    answer:
      'Our expert team will assess your energy needs, roof space, budget, and goals to recommend the perfect system. We offer free consultations and customized proposals to ensure you get the best solution for your specific situation.',
  },
  {
    question: 'HOW LONG DOES INSTALLATION TAKE?',
    answer:
      'Most residential installations are completed within 1-3 days, depending on system size and complexity. Commercial projects may take longer. We handle all permits and inspections to ensure a smooth, hassle-free process.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-30">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d1fadf] opacity-30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#d1fadf] opacity-30 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#285219] md:text-4xl lg:text-5xl">
            <span className="">FREQUENTLY</span> ASKED{' '}
            <span className="">QUESTIONS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#667085] md:text-lg">
            Everything you need to know about our product and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-3xl md:mb-16"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#d0d5dd] last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-opacity hover:opacity-70"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold tracking-wide text-[#101828] uppercase md:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#101828]">
                      <Minus className="h-4 w-4 text-[#101828]" />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#101828]">
                      <Plus className="h-4 w-4 text-[#101828]" />
                    </div>
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-sm leading-relaxed text-[#667085] md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm md:p-12"
        >
          {/* Team member photos */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            className="mb-6 flex items-center justify-center -space-x-2"
          >
            <img
              src="/av2.png"
              alt="Team member"
              className="h-14 w-14 rounded-full object-cover"
            />
            <img
              src="/av.png"
              alt="Team member"
              className="h-14 w-14 rounded-full object-cover"
            />
            <img
              src="/av3.png"
              alt="Team member"
              className="h-14 w-14 rounded-full object-cover"
            />
          </motion.div>

          <h3 className="mb-3 font-mono text-2xl font-bold tracking-wide text-[#101828] uppercase md:text-3xl">
            Still Have Questions?
          </h3>
          <p className="mb-8 text-base text-[#667085] md:text-lg">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-[#099250] px-8 py-3 font-medium tracking-wide text-white uppercase transition-colors hover:bg-[#088045]"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
