'use client';
import '../../style/swiper.css';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import MySlider from './swiper';

export default function Projects() {
  const t = useTranslations('slides');
  return (
    <div id="projects" className="min-h-screen py-4 flex items-center">
      <div className="flex flex-col w-full">
        <div className="py-4">
          <h2 className="text-4xl pb-5 text-white mt-7 ">{t('title')}</h2>
          <MySlider />
        </div>
      </div>
    </div>
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
