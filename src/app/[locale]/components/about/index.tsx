'use client';
import { GetStaticPropsContext } from 'next';
import Tech from '../word-cloud/tech';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
  const t = useTranslations('about');

  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: true,
  });

  const { ref: refP, inView: inViewParagraph } = useInView({
    triggerOnce: true,
  });

  const { ref: refPr, inView: inViewProfile } = useInView({
    triggerOnce: true,
  });

  const { ref: refS, inView: inViewSkills } = useInView({
    triggerOnce: true,
  });

  const { ref: refB, inView: inViewBalls } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-4">
      <motion.div className="py-4" ref={refTitle}>
        <motion.h3
          className="text-center text-4xl md:pt-[100px] ml-3 py-2 text-white mt-7 md:mt-0"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : -100 }}
          transition={{ duration: 1, type: 'spring', stiffness: 60 }}
        >
          {t('about-h1')}
        </motion.h3>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-3">
          <motion.p
            ref={refP}
            className="max-w-[800px] leading-normal text-base sm:text-xl text-darkGrey"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inViewParagraph ? 1 : 0,
              x: inViewParagraph ? 0 : -100,
            }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 60,
              delay: 0.4,
            }}
          >
            {t('about-me')}
          </motion.p>
        </div>
      </motion.div>

      <div className="flex justify-around">
        <div className="flex max-w-full w-[800px] justify-between flex-wrap md:flex-nowrap gap-2 sm:gap-7">
          <div className="about-introduce-part2">
            <motion.div
              className="max-w-full md:max-w-[400px]"
              ref={refPr}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inViewProfile ? 1 : 0,
                x: inViewProfile ? 0 : -100,
              }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 60,
                delay: 0.5,
              }}
            >
              <h6 className="uppercase font-bold my-3 text-white">
                {t('about-profile')}
              </h6>
              <p className="leading-normal text-base sm:text-xl text-darkGrey mb-3">
                {t('profile')}
              </p>
              <div className="flex justify-between">
                <div>
                  <strong className="uppercase font-bold my-3 text-white">
                    {t('fullName')}
                  </strong>
                  <p className="leading-normal text-base sm:text-xl text-darkGrey mb-2">
                    Mohammed Allawi
                  </p>
                </div>
                <div className="sm:mr-4">
                  <strong className="uppercase font-bold my-3 text-white">
                    {t('alder')}
                  </strong>
                  <p className="text-base sm:text-xl text-darkGrey">
                    25 {t('år')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-full md:max-w-[400px] flex justify-center">
            <motion.div
              ref={refS}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: inViewSkills ? 1 : 0,
                y: inViewSkills ? 0 : 100,
              }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 60,
                delay: 0.5,
              }}
            >
              <h6 className="uppercase font-bold my-3 text-white">
                {t('ferdigheter')}
              </h6>
              <p className="profil-pargf text-darkGrey">
                <span className="font-bold text-white ">{t('skills')}</span>:
                HTML, CSS, Sass, JavaScript, TypeScript, React, Next.js, Figma &
                Tailwind.
              </p>
              <p className="my-2 text-base sm:text-xl text-darkGrey mb-6 sm:mt-4 sm:mb-0">
                {t('skills-p')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        ref={refB}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inViewBalls ? 1 : 0, y: inViewBalls ? 0 : 100 }}
        transition={{ duration: 1, type: 'spring', delay: 0.3, stiffness: 60 }}
      >
        <Tech />
      </motion.div>
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
