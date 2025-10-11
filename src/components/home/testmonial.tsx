'use client'

import { motion, Variants } from 'framer-motion'
import { Play, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    type: 'text',
    quote:
      "Eunizel Energy Solutions transformed my home experience. Their solar system runs smoothly, and I haven't had to worry about power outages since installation. The team was professional and polite all through. I'm very impressed.",
    rating: 5,
    author: 'Mr. Chike U.',
    role: 'Homeowner',
    avatar: '/tre.png',
  },
  {
    type: 'text',
    quote:
      'Running my boutique used to be stressful because of poor power supply. Eunizel Energy provided a reliable solar backup that keeps everything running. My expenses on fuel have dropped drastically. I recommend them to every business owner.',
    rating: 5,
    author: 'Mrs. Funke A.',
    role: 'Business Owner',
    avatar: '/tre.png',
  },
  {
    type: 'text',
    quote:
      'The installation process was clean and organized, and they delivered exactly when they said they would. Since then, my family has enjoyed steady power and peace of mind. Eunizel Energy is truly dependable.',
    rating: 5,
    author: 'Mr. Daniel O.',
    role: 'Estate Resident (Lekki)',
    avatar: '/tre.png',
  },
  {
    type: 'text',
    quote:
      'Eunizel Energy Solutions helped us cut down our daily generator costs. The solar system they installed powers our lights, music, and POS machines without fail. Excellent service and after-sales support!',
    rating: 5,
    author: 'Lounge/hotel',
    role: 'Management',
    avatar: '/tre.png',
  },
  {
    type: 'text',
    quote:
      'We had constant interruptions during school hours before switching to solar. Thanks to Eunizel Energy, our classrooms now have uninterrupted power throughout the day. Their professionalism and support have been outstanding.',
    rating: 5,
    author: 'Mrs. Grace I.',
    role: 'School Administrator',
    avatar: '/tre.png',
  },
  {
    type: 'text',
    quote:
      "I've worked with several solar companies, but Eunizel Energy stands out for their transparency, neat installation, and commitment to quality. My clients are happy, and I'll continue partnering with them for future projects.",
    rating: 5,
    author: 'Mr. Henry N.',
    role: 'Realtor & Property Developer',
    avatar: '/tre.png',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-4xl font-bold text-[#099250] md:text-5xl"
          >
            Real Stories, Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg text-[#667085]"
          >
            Hear from some of our amazing customers who having gotten their own
            credits.
          </motion.p>
        </div>

        {/* Rating Badges */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {/* Trustpilot */}
          <div className="flex flex-col items-center">
            <div className="mb-1 flex items-center gap-2">
              <Star className="h-5 w-5 fill-[#00b67a] text-[#00b67a]" />
              <span className="text-sm font-bold">Trustpilot</span>
            </div>
            <span className="text-xs text-[#667085]">4.6 RATING</span>
          </div>

          {/* Google Rating */}
          <div className="flex flex-col items-center">
            <div className="mb-1 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold">
                G
              </div>
              <span className="text-sm font-bold">Google Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">4.8</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-[#fbbf24] text-[#fbbf24]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`${testimonial.type === 'video' ? 'lg:row-span-2' : ''}`}
          >
            {testimonial.type === 'text' ? (
              <TextTestimonialCard testimonial={testimonial} />
            ) : (
              <VideoTestimonialCard testimonial={testimonial} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function TextTestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#eaecf0] bg-white p-6">
      {/* Quote Mark */}
      <div className="mb-4 font-serif text-4xl text-[#000000]">"</div>

      {/* Quote Text */}
      <p className="mb-6 flex-grow text-[#000000]">{testimonial.quote}</p>

      {/* Rating */}
      <div className="mb-6 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar || '/placeholder.svg'}
          alt={testimonial.author}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-[#000000]">{testimonial.author}</p>
          <p className="text-sm text-[#667085]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

function VideoTestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="group relative h-full min-h-[400px] cursor-pointer overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src={testimonial.image || '/placeholder.svg'}
        alt={testimonial.author}
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
          <Play className="ml-1 h-6 w-6 text-[#000000]" fill="currentColor" />
        </div>
      </motion.div>

      {/* Content at Bottom */}
      <div className="absolute right-0 bottom-0 left-0 p-6">
        {/* Rating */}
        <div className="mb-3 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]" />
          ))}
        </div>

        {/* Author */}
        <div>
          <p className="text-lg font-semibold text-white">
            {testimonial.author}
          </p>
          <p className="text-sm text-white/80">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
