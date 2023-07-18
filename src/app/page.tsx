import type { Metadata } from 'next';
import Introduction from './components/hero';
import AboutMe from './components/about';
import Projects from './components/projects/index';

export const metadata: Metadata = {
  title: 'Portefølje | MA',
  description: 'My personal portfolio',
  keywords: 'front-end developer, next.js, typescript, tailwind, thereJs',
};

export default function Home() {
  return (
    <>
      <Introduction />
      <Projects />
      <AboutMe />
    </>
  );
}
