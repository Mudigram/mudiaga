import './globals.css';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata, Viewport } from 'next';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Mudiaga Omene — Builder',
        template: '%s | Mudiaga Omene'
    },
    description: 'I turn problems into products. Systems-oriented software builder with an engineering background, product thinking, and a bias for shipping.',
    keywords: ['Software Engineer', 'Product Builder', 'Full Stack', 'TypeScript', 'Next.js', 'Python', 'FastAPI', 'React', 'AI', 'Nigeria', 'Lagos'],
    authors: [{ name: 'Mudiaga Omene' }],
    creator: 'Mudiaga Omene',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mudiaga-dev.vercel.app/',
        title: 'Mudiaga Omene — Builder',
        description: 'I turn problems into products. Software engineer, product builder, systems thinker.',
        siteName: 'Mudiaga Omene',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mudiaga Omene — Builder',
        description: 'I turn problems into products. Software engineer, product builder, systems thinker.',
        creator: '@TheMudiaga',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#faf9f7' },
        { media: '(prefers-color-scheme: dark)', color: '#1a1816' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${outfit.variable} ${jetbrainsMono.variable} min-h-screen bg-background antialiased`}
                style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
                suppressHydrationWarning
            >
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}