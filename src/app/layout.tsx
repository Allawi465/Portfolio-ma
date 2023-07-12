import './style/globals.css';
import type { Metadata } from 'next';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

export const metadata: Metadata = {
  title: 'Portfolio | MA',
  description: 'My personal portfolio',
  keywords: 'front-end developer, next.js, typescript, tailwind, thereJs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
