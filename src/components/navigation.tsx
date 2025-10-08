'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { cn } from '~/lib/utils'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const path = usePathname()

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const mobileMenuItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const logoVariants: Variants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(9, 146, 80, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
    },
  }

  const underlineVariants: Variants = {
    initial: { width: 0 },
    hover: {
      width: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'absolute top-0 right-0 left-0 z-50 backdrop-blur-sm',
        path === '/' ? 'bg-transparent' : 'bg-white'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Eunizel Logo"
                width={140}
                height={44}
                draggable={false}
                className="object-contain"
              />
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <motion.div
              className="relative"
              whileHover="hover"
              initial="initial"
            >
              <Link
                href="/"
                className={cn(
                  'text-[15px] font-semibold transition-colors duration-300',
                  path === '/' ? 'text-white hover:text-white/80' : ''
                )}
              >
                Home
              </Link>
              <motion.div
                className="absolute bottom-[-4px] left-0 h-0.5 bg-white"
                initial={{ width: '100%' }}
              />
            </motion.div>

            {['FAQs', 'Load Calculator'].map((item, index) => {
              const href = item === 'FAQs' ? '/faqs' : '/calculator'
              return (
                <motion.div
                  key={index}
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link
                    href={href}
                    className={cn(
                      'text-[15px] font-medium text-[#98a2b3] transition-colors duration-300 hover:text-[#667085]',
                      path === '/' ? 'text-white hover:text-white/80' : ''
                    )}
                  >
                    {item}
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-[-4px] left-0 h-0.5 bg-white"
                  />
                </motion.div>
              )
            })}
          </nav>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="hidden lg:block"
          >
            <Link
              href="/contact"
              className="block rounded-lg bg-[#099250] px-8 py-2.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#087d42]"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white transition-colors duration-300 hover:text-white/80 lg:hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-hidden lg:hidden"
            >
              <nav className="flex flex-col gap-4 border-t border-white/20 py-4">
                <motion.div variants={mobileMenuItemVariants}>
                  <Link
                    href="/"
                    className="block text-[15px] font-semibold text-white transition-all duration-300 hover:text-white/80"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                {[
                  { name: 'FAQs', href: '/faqs' },
                  { name: 'Load Calculator', href: '/calculator' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={mobileMenuItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-[15px] font-medium text-white/80 transition-colors duration-300 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={mobileMenuItemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="mt-2 block rounded-lg bg-[#099250] px-8 py-2.5 text-center text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#087d42]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
