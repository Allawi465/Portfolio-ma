'use client';
import '../../style/swiper.css';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import MySlider from './swiper';
import { motion } from 'framer-motion';

export default function Projects() {
  const t = useTranslations('slides');
  return (
    <section id="projects" className="py-4 relative">
      <div className="py-4">
        <h2 className="text-4xl md:pt-[100px] py-1 text-white mt-7 md:mt-0">
          {t('title')}
        </h2>
        <MySlider />
      </div>
      <a href="#about" className="scroll flex justify-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
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
