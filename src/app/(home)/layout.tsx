import { ReactNode } from 'react'
import Header from '~/components/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="font-sans">
      <Header />
      {children}
    </main>
  )
}
