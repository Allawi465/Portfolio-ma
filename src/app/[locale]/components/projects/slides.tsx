'use client';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import eCommerceSite from '../../../../../public/ecommerce.png';
import bookingSite from '../../../../../public/bookingSit.jpg';
import auctionsSite from '../../../../../public/auctioSite.png';
import notebookSite from '../../../../../public/notebook.png';
import trailsHikes from '../../../../../public/trail-hikes.jpg';

const slides = () => {
  const t = useTranslations('slides');
  return [
    {
      image: eCommerceSite,
      title: 'Buyers',
      description: t('byers'),
      githubLink: 'https://github.com/Allawi465/js-framewokrs-ca',
      liveSiteLink: 'https://buyers.netlify.app/',
    },
    {
      image: bookingSite,
      title: 'Holidaze',
      description: t('holidaze'),
      githubLink: 'https://github.com/Allawi465/holidaze',
      liveSiteLink: 'https://allawi465.github.io/holidaze/',
    },
    {
      image: trailsHikes,
      title: 'Adventure-Trails-Hikes',
      description: t('adventure'),
      githubLink: 'https://github.com/Allawi465/Adventure-Trails-Hikes',
      liveSiteLink: 'https://allawi465.github.io/Adventure-Trails-Hikes/',
    },
    {
      image: auctionsSite,
      title: 'NoxB',
      description: t('noxB'),
      githubLink: 'https://github.com/Allawi465/Semester-Project-2',
      liveSiteLink: 'https://noxb.netlify.app/index.html',
    },
    {
      image: notebookSite,
      title: 'Notebook',
      description: t('notebook'),
      githubLink: 'https://github.com/Allawi465/notebook',
      liveSiteLink: 'https://allawi465.github.io/notebook/',
    },
  ];
};

export default slides;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../../messages/${locale}.json`))
        .default,
    },
  };
}
