/* import type { Metadata } from 'next'; */
import { redirect } from 'next/navigation';
import Introduction from './components/hero';
import AboutMe from './components/about';
import Projects from './components/projects/index';

/* export function generateMetadata(): Metadata {
  const { t } = useTranslation('common');

  const title = t('title');
  const content = t('content');

  return {
    title: `${title}`,
    description: `${content}`,
  };
}
 */
export default function Home() {
  redirect('/no');
  return (
    <>
      <Introduction />
      <Projects />
      <AboutMe />
    </>
  );
}
