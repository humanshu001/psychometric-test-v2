"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full border-b p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold text-[#841844] hover:opacity-80 transition">
          GU Personality Portal
        </Link>
        <div className="flex justify-end gap-6 text-sm">
          <Link
            href="/"
            className="font-medium hover:text-[#841844] transition"
          >
            Home
          </Link>
          <Link
            href="/test"
            className="font-medium hover:text-[#841844] transition"
          >
            Tests
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto py-10 px-6">
        {children}
      </main>

      <Separator />

      {/* Footer */}
      <footer className="p-4 text-center sm:text-right text-sm text-muted-foreground">
        Made with ❤️ by <span className="font-medium text-[#841844]">Softricity</span>
      </footer>
    </div>
  );
}
