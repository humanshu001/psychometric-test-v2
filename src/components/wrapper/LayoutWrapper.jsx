'use client'

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="w-full border-b p-4 flex justify-between items-center">
        <div className="text-xl font-black">
          GU Personality Portal
        </div>
        <div className="flex justify-end gap-8">
          <Link href="/" className="text-sm font-semibold hover:underline transition-all duration-200">
            Home
          </Link>
          <Link href="/test" className="text-sm font-semibold hover:underline transition-all duration-200">
            Tests
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto py-8 px-4">
        {children}
      </main>

      <Separator />

      <footer className="p-4 text-right text-sm text-muted-foreground">
        Made with ❤️ by Softricity
      </footer>
    </div>
  )
}
