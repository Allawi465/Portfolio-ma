import useTranslation from 'next-translate/useTranslation';
import eCommerceSite from '../../../../public/ecommerce.png';
import bookingSite from '../../../../public/bookingSit.jpg';
import auctionsSite from '../../../../public/auctioSite.png';
import notebookSite from '../../../../public/notebook.png';
import trailsHikes from '../../../../public/trail-hikes.jpg';

const slides = () => {
  const { t } = useTranslation('common');
  return [
    {
      image: eCommerceSite,
      title: 'Buyers.',
      description: t('slides.0.description'),
      githubLink: 'https://github.com/Allawi465/js-framewokrs-ca',
      liveSiteLink: 'https://buyers.netlify.app/',
    },
    {
      image: bookingSite,
      title: 'Holidaze',
      description: t('slides.1.description'),
      githubLink: 'https://github.com/Allawi465/holidaze',
      liveSiteLink: 'https://allawi465.github.io/holidaze/',
    },
    {
      image: trailsHikes,
      title: 'Adventure-Trails-Hikes',
      description: t('slides.2.description'),
      githubLink: 'https://github.com/Allawi465/Adventure-Trails-Hikes',
      liveSiteLink: 'https://allawi465.github.io/Adventure-Trails-Hikes/',
    },
    {
      image: auctionsSite,
      title: 'NoxB',
      description: t('slides.3.description'),
      githubLink: 'https://github.com/Allawi465/Semester-Project-2',
      liveSiteLink: 'https://noxb.netlify.app/index.html',
    },
    {
      image: notebookSite,
      title: 'Notebook',
      description: t('slides.4.description'),
      githubLink: 'https://github.com/Allawi465/notebook',
      liveSiteLink: 'https://allawi465.github.io/notebook/',
    },
  ];
};

export default slides;
