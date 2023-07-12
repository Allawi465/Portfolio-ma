import Introduction from './components/hero';
import AboutMe from './components/about';
import Projects from './components/projects/index';

export default function Home() {
  return (
    <div>
      <Introduction />
      <Projects />
      <div className="arrow-scroll pt-[97px] pb-[150px] sm:py-[140px] ">
        <a href="#about">
          <span className="arrow one border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
          <span className="arrow two border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
          <span className="arrow tree border-r-2 border-b-2 border-sky-800 dark:border-sky-400"></span>
        </a>
      </div>
      <AboutMe />
    </div>
  );
}
