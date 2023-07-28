'use client';
import '../../style/swiper.css';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import MySlider from './swiper';

export default function Projects() {
  const t = useTranslations('slides');
  return (
    <section id="projects" className="min-h-screen py-4 flex sm:items-center ">
      <div className="flex flex-col w-full">
        <div className="py-4">
          <h2 className="text-4xl md:pt-[40px] ml-3 py-2 text-white mt-7 md:mt-0">
            {t('title')}
          </h2>
          <div>
            <MySlider />
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
