'use client';
import './style/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
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
