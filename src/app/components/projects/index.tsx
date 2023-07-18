import MySlider from './swiper';

export default function Projects() {
  return (
    <section id="projects" className="py-4">
      <div className="py-4">
        <h2 className="text-4xl md:pt-[100px] ml-3 py-1 text-white mt-7 md:mt-0">
          Prosjekter.
        </h2>
        <MySlider />
        <div className="arrow-scroll pt-[50px] sm:pt-[200px] ">
          <a href="#about">
            <span className="arrow one border-r-2 border-b-2 border-sky-400"></span>
            <span className="arrow two border-r-2 border-b-2 border-sky-400"></span>
            <span className="arrow tree border-r-2 border-b-2 border-sky-400"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
