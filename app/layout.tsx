import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'Bruno Damián Zappellini - DevOps/SRE Engineer',
  description: 'DevOps/SRE specialist, infrastructure architect, and university educator. Expertise in Kubernetes, networking, security, and automation.',
  keywords: ['DevOps', 'SRE', 'Kubernetes', 'Infrastructure', 'Security', 'Networking', 'Automation', 'Bruno Zappellini'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Bruno Damián Zappellini - DevOps/SRE Engineer',
    description: 'Infrastructure architect and educator specializing in cloud infrastructure, Kubernetes, networking, and security.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport = {
  themeColor: '#0d1117',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Bruno Damián Zappellini",
      "jobTitle": "DevOps / SRE Engineer",
      "description": "Especialista en Redes y Seguridad, Docente Universitario y DevOps Engineer.",
      "sameAs": [
        "https://www.linkedin.com/in/bruno-zappellini-9b303613/",
        "https://github.com/bzappellini"
      ],
      "knowsAbout": ["DevOps", "SRE", "Kubernetes", "Network Security", "Automation", "Linux"]
    }
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.variable} ${jetbrainsMono.variable} font-sans antialiased bg-primary text-primary-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
