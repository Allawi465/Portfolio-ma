'use client';
import './style/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Loading from './components/loading';

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <html lang={lang}>
      <body>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
