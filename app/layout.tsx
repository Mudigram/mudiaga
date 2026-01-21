import './globals.css';
import Header from '@/components/layout/Header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Mudiaga | Full-Stack Software Engineer',
    template: '%s | Mudiaga Portfolio'
  },
  description: 'Proactive software engineer specializing in scalable full-stack applications, domain-driven design, and high-performance web solutions.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Nigeria', 'Portfolio'],
  authors: [{ name: 'Mudiaga' }],
  creator: 'Mudiaga',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mudiaga.dev',
    title: 'Mudiaga | Full-Stack Software Engineer',
    description: 'Building scalable solutions with modern web technologies.',
    siteName: 'Mudiaga Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudiaga | Full-Stack Software Engineer',
    description: 'Proactive software engineer building scalable web solutions.',
    creator: '@Mudigram',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 max-w-7xl mx-auto w-full">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}