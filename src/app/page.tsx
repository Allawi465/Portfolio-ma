import Introduction from './components/hero';
import AboutMe from './components/about';
import Projects from './components/projects/index';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
      <Introduction />
      <Projects />
      <AboutMe />
    </div>
  );
}
