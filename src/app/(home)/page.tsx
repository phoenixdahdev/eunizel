import Image from 'next/image'
import Hero from '~/components/home/hero'
import OurServices from '~/components/home/our-services'
import Testimonials from '~/components/home/testmonial'
import WhyChooseUs from '~/components/home/why-choose-us'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
    </>
  )
}
