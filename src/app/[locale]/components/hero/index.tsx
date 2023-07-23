'use client';
import { GetStaticPropsContext } from 'next';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Particles from '../particlest/index';
import { useTranslations } from 'next-intl';

export default function Introduction() {
  const t = useTranslations('introduction');
  return (
    <section id="portfolio" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <div className="flex justify-center h-screen">
        <div className="my-auto sm:my-auto">
          <h1 className="text-3xl md:pt-4 text-center text-white">
            {t('hero-h1')}
          </h1>
          <h2 className="text-darkGrey text-2xl md:py-2 text-center italic">
            {t('hero-h2')}
          </h2>
          <div className="flex justify-center py-3">
            <a
              href="#projects"
              className="group flex border border-transparent bg-gold text-dark hover:border-lightGold hover:text-gold hover:bg-transparent font-bold py-2 px-10 rounded text-center"
            >
              {t('hero-btn')}
              <HiOutlineArrowRight className="h-6 w-6 ml-1 transition-transform duration-300 transform group-hover:rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../../messages/${locale}.json`))
        .default,
    },
  };
}
