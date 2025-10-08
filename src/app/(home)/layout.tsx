import { ReactNode } from 'react'
import Footer from '~/components/footer'
import Header from '~/components/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="font-sans">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
