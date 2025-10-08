'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How Much Can I Save With Solar Energy?',
    answer:
      'Your savings depend on your current electricity usage and system size. Most of our clients see up to 40-70% reduction in monthly electricity bills, and the system often pays for itself within a few years.',
  },
  {
    question: "What Happens When There's No Sunlight Or During The Night?",
    answer:
      "During nighttime or cloudy days, your solar system can draw power from the grid if you're connected, or from battery storage if you have a backup system. Hybrid systems ensure you always have power when you need it.",
  },
  {
    question: 'How Long Do Solar Panels Last?',
    answer:
      'Quality solar panels typically last 25-30 years or more. Most manufacturers offer warranties of 25 years, and panels continue to produce electricity beyond that, though at slightly reduced efficiency.',
  },
  {
    question: "Will Solar Work If I'm Still Connected To The Grid?",
    answer:
      'Yes! Grid-tied solar systems are the most common setup. You can use solar power during the day and draw from the grid when needed. Excess energy can often be sold back to the grid through net metering programs.',
  },
  {
    question: 'What Maintenance Is Required?',
    answer:
      'Solar panels require minimal maintenance. Regular cleaning (2-4 times per year) and annual inspections are typically sufficient. Our team provides comprehensive maintenance packages to ensure optimal performance.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative overflow-hidden bg-[#edfcf2] py-16 md:py-24">
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
            Frequently Asked Questions
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
                <span className="pr-4 text-base font-medium text-[#101828] md:text-lg">
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
          className="mx-auto max-w-5xl rounded-2xl bg-white p-8 text-center shadow-sm md:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d1fadf]"
          >
            <MessageCircle className="h-8 w-8 text-[#099250]" />
          </motion.div>

          <h3 className="mb-3 font-mono text-2xl font-bold text-[#101828] md:text-3xl">
            Have More Questions?
          </h3>
          <p className="mb-8 text-base text-[#667085] md:text-lg">
            Can't find the answer you're looking for here? Check out our more
            detailed FAQs
          </p>

          <Link href="/faqs" passHref>
            <motion.button className="rounded-lg bg-[#099250] px-8 py-3 font-medium text-white transition-colors hover:bg-[#088045]">
              See Our Faqs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
