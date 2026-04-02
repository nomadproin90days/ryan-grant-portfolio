import './globals.css'

export const metadata = {
  title: 'Ryan Grant | StoneSystems CSM Team Lead',
  description: 'Portfolio highlighting Ryan Grant\'s contributions to StoneSystems - AI-powered client success, autonomous agent systems, and scalable operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
