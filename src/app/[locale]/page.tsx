import Introduction from './components/hero';
import AboutMe from './components/about';
import Projects from './components/projects/index';

export default function Home() {
  return (
    <>
      <Introduction />
      <Projects />
      <AboutMe />
    </>
  );
}
