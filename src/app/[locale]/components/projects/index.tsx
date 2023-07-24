'use client';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import MySlider from './swiper';

export default function Projects() {
  const t = useTranslations('slides');
  return (
    <section id="projects" className="py-4">
      <div className="py-4">
        <h2 className="text-4xl md:pt-[100px] py-1 text-white mt-7 md:mt-0">
          {t('title')}
        </h2>
        <MySlider />
        <div className="arrow-scroll pt-[50px] sm:pt-[100px] ">
          <a href="#about">
            <span className="arrow one border-r-2 border-b-2 border-sky-400"></span>
            <span className="arrow two border-r-2 border-b-2 border-sky-400"></span>
            <span className="arrow tree border-r-2 border-b-2 border-sky-400"></span>
          </a>
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
