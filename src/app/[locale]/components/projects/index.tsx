'use client';
import '../../style/swiper.css';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import MySlider from './swiper';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change it according to your need
  });

  const t = useTranslations('slides');
  return (
    <div id="projects" className="min-h-screen py-4 flex sm:items-center">
      <motion.div className="flex flex-col w-full" ref={ref}>
        <div className="py-4">
          <motion.h2
            className="text-4xl ml-3 py-2 text-white mt-[60px] md:mt-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : -100,
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 60 }}
          >
            {t('title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 200,
            }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 60,
              delay: 0.3,
            }}
          >
            <MySlider />
          </motion.div>
        </div>
      </motion.div>
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
