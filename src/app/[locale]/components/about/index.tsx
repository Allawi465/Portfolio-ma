'use client';
import { GetStaticPropsContext } from 'next';
import Tech from '../word-cloud/tech';
import { useTranslations } from 'next-intl';
export default function AboutMe() {
  const t = useTranslations('about');
  return (
    <section id="about" className="py-4">
      <div className="py-4">
        <h3 className="text-center text-4xl md:pt-[100px] ml-3 py-2 text-white mt-7 md:mt-0">
          {t('about-h1')}
        </h3>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-3">
          <p className="max-w-[800px] leading-normal text-base sm:text-xl text-darkGrey">
            {t('about-me')}
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-full w-[800px] justify-between flex-wrap md:flex-nowrap gap-2 sm:gap-7">
          <div className="about-introduce-part2">
            <div className="max-w-full md:max-w-[400px]">
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
            </div>
          </div>
          <div className="max-w-full md:max-w-[400px] flex justify-center">
            <div>
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
            </div>
          </div>
        </div>
      </div>
      <Tech />
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
