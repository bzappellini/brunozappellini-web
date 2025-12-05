'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold text-primary-foreground hover:text-accent transition-colors">
          Bruno Zappellini
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">ABOUT</a>
          <a href="#experience" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">EXPERIENCE</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">PROJECTS</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">CONTACT</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-secondary/50 px-6 py-4">
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary-foreground">ABOUT</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary-foreground">EXPERIENCE</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary-foreground">PROJECTS</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary-foreground">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  )
}
