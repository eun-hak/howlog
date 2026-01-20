import React from 'react';
import Script from 'next/script';
import '../styles/index.css';
import '../styles/tailwind.css';
import '../styles/fonts.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SuppressHydrationWarning } from './components/SuppressHydrationWarning';

export const metadata = {
    title: {
        default: '하우로그(HowLog) - 방법을 기록한 아카이브',
        template: '%s | 하우로그',
    },
    description: '하우로그(HowLog)는 다양한 분야의 How-to 가이드와 튜토리얼을 제공하는 지식 아카이브입니다. 기술, 생활, 창작 등 여러 주제의 실용적인 방법을 기록하고 공유합니다.',
    keywords: ['하우로그', 'HowLog', 'How-to', '가이드', '튜토리얼', '방법', '지식', '아카이브', '노하우', '팁'],
    authors: [{ name: '하우로그' }],
    creator: '하우로그',
    publisher: '하우로그',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://howlog.jisiknarae.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: '/',
        siteName: '하우로그',
        title: '하우로그(HowLog) - 방법을 기록한 아카이브',
        description: '다양한 분야의 How-to 가이드와 튜토리얼을 제공하는 지식 아카이브',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: '하우로그',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '하우로그',
        description: '방법을 기록한 아카이브',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'nGLC6wqeingyxdWpDtTR9DKlBw7TNDT9A8_l8PrHWt0',
        other: {
            'naver-site-verification': '094139038ce6770db27aa5907e4d187026f34334',
        },
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/icon.svg', sizes: '192x192', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
                <meta name="naver-site-verification" content="094139038ce6770db27aa5907e4d187026f34334" />
                <meta name="google-adsense-account" content="ca-pub-1410200096892996" />
                
                {/* 파비콘 - 검색엔진 최적화 (구글, 네이버) */}
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="32x32" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="192x192" />
                <link rel="apple-touch-icon" href="/apple-icon.svg" sizes="180x180" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#4F46E5" />
                <meta name="msapplication-TileColor" content="#4F46E5" />
                <meta name="msapplication-TileImage" content="/icon.svg" />
                
                {/* Google AdSense - head에 직접 삽입 (애드센스 요구사항) */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1410200096892996"
                    crossOrigin="anonymous"
                />
            </head>
            <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
                
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZCMSKGVQ2M"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-ZCMSKGVQ2M');
                    `}
                </Script>
                
                <SuppressHydrationWarning />
                <Header />
                <main suppressHydrationWarning>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
