import './style/globals.css';
import { createTranslator } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'de' }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({ params: { locale } }: any) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t('meta.title'),
    description: t('meta.content'),
  };
}
