'use client'

import { motion } from 'framer-motion'
import { Mail, Building2, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    contact: 'hello@euniizelenergy.com',
    link: 'mailto:hello@euniizelenergy.com',
  },
  {
    icon: Building2,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    contact:
      '3 Alh Kudirat Adenekan Street off Canoe road Oke-Afa, Isolo Lagos',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    contact: '+234 (803) 000-0000',
    link: 'tel:+2348030000000',
  },
]

export default function Contact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#095c37] md:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#667085] md:text-lg">
            Our friendly team would love to hear from you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d3f8df]"
              >
                <method.icon className="h-6 w-6 text-[#099250]" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-[#101828]">
                {method.title}
              </h3>
              <p className="mb-3 text-sm text-[#667085]">
                {method.description}
              </p>
              <a
                href={method.link}
                className="text-sm font-medium text-[#099250] transition-colors hover:text-[#095c37] md:text-base"
              >
                {method.contact}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Office Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-hidden rounded-2xl md:mb-16"
        >
          <Image
            src="/contact.png"
            alt="Modern office workspace with laptop"
            width={1200}
            height={600}
            className="h-[300px] w-full object-cover md:h-[500px]"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d3f8df]"
          >
            <MessageCircle className="h-6 w-6 text-[#099250]" />
          </motion.div>
          <h3 className="mb-3 text-2xl font-bold text-[#101828] md:text-3xl">
            Need Quick Answers
          </h3>
          <p className="mb-6 text-base text-[#667085] md:text-lg">
            You can check our faqs we already answered some of your questions.
          </p>
          <motion.a
            href="#faq"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-lg bg-[#099250] px-8 py-3 font-medium text-white transition-colors hover:bg-[#095c37]"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
