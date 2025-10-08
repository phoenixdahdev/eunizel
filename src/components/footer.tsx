'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  company: [
    // { label: 'Overview', href: '#overview' },
    // { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  legal: [
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Cookies', href: '#cookies' },
    { label: 'Licenses', href: '#licenses' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#eaecf0] bg-[#fcfcfd]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Section - Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Eunizel Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-[#667085]">
              We are committed to lighting up lives with energy that never runs
              out.
            </p>
          </motion.div>

          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
            {/* Our Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-[#344054]">
                Our Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#667085] transition-colors hover:text-[#099250]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-[#344054]">
                Social
              </h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#667085] transition-colors hover:text-[#099250]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-[#344054]">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#667085] transition-colors hover:text-[#099250]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#099250] py-6"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white">
            © 2025 Eunizel Energy. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
