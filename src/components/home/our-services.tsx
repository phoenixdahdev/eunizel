'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Solar Power Solutions',
    description:
      'Power your home, office, or business with reliable solar systems designed for efficiency and long-term performance.',
    features: [
      'Solar Panel Installation (Residential, Commercial & Industrial)',
      'Hybrid & Off-Grid Systems',
      'Inverter & Backup Systems',
    ],
    image: '/ima.png',
    imageAlt: 'Solar panels installed on a rooftop',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Energy Management & Storage',
    description:
      'Take control of your energy with smart storage and monitoring systems that maximize efficiency and savings.',
    features: [
      'Energy Storage Solutions (Battery Systems)',
      'Solar Consulting & Energy Audits',
      'Smart Energy Monitoring',
    ],
    image: '/imag.png',
    imageAlt: 'Energy storage facility with battery systems',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Support & Large-Scale Projects',
    description:
      'Enjoy peace of mind with professional support and scalable solar projects for communities and organizations.',
    features: [
      'Maintenance & Technical Support',
      'System Upgrades & Troubleshooting',
      'Corporate & Large-Scale Solar Projects (Schools, Hospitals, Estates, Factories)',
    ],
    image: '/gat.png',
    imageAlt: 'Large-scale solar panel installation',
  },
]

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-8 lg:px-16">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#edfcf2] opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#edfcf2] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#101828] md:text-5xl">
            Our Services
          </h2>
          <p className="max-w-2xl text-lg text-[#475467]">
            We take pride in delivering high-quality, future-proof renewable
            energy solutions. With years of experience and a team of certified
            experts.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edfcf2] text-[#099250]">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-bold text-[#101828]">
                  {service.title}
                </h3>

                <p className="text-lg leading-relaxed text-[#475467]">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + featureIndex * 0.1,
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#edfcf2]">
                        <Check className="h-3 w-3 text-[#099250]" />
                      </div>
                      <span className="text-[#475467]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex-1"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.imageAlt}
                    width={650}
                    height={512}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
