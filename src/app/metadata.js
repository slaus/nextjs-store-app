export const metadata = {
  title: 'Default Page',
  description: 'The React Framework for the Web',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Slaus', url: 'https://nextjs.org'}],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://polechu.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'uk': '/uk',
    },
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  manifest: 'https://nextjs.org/manifest.json',
};