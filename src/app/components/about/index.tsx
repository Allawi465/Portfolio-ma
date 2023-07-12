export default function AboutMe() {
  return (
    <section id="about" className="py-3">
      <div className="py-4">
        <h3 className="text-center text-4xl md:pt-[100px] ml-3 py-2">
          About me.
        </h3>
        <div className="flex justify-center flex-wrap sm:flex-nowrap gap-3">
          <p className="max-w-[750px] leading-normal text-base sm:text-xl text-lightGray dark:text-darkGrey">
            I am a graduate of Noroff School of Technology and Digital Media. I
            love coding, and the challenges it presents me with. I use a lot of
            my spare time programming in different languages, working towards
            evolving my knowledge and skills. I thrive to expand my experience
            and hope to eventually be able to work as a full stack developer.
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-full w-[750px] justify-between flex-wrap sm:flex-nowrap gap-4">
          <div className="about-introduce-part2">
            <div className="mmax-w-full sm:max-w-[300px]">
              <h6 className="uppercase font-bold my-3">Profile</h6>
              <p className="leading-normal text-base sm:text-xl text-lightGray dark:text-darkGrey mb-2">
                I'm located in Norway and have been learning coding and
                exploring the developing world during my education of 2 years. I
                also intend to continue my education and been doing my own
                research to acquire the expertise to become a proffesional web
                developer.
              </p>
              <div className="flex justify-between sm:flex-col py-2">
                <div>
                  <strong className="uppercase font-bold my-3">
                    Full name:
                  </strong>
                  <p className="leading-normal text-base sm:text-xl text-lightGray dark:text-darkGrey mb-2">
                    Mohammed Allawi
                  </p>
                </div>
                <div>
                  <strong className="uppercase font-bold my-3">age:</strong>
                  <p className="text-base sm:text-xl text-lightGray dark:text-darkGrey">
                    25 years
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full sm:max-w-[400px] flex justify-center">
            <div>
              <h6 className="uppercase font-bold my-3">skills:</h6>
              <p className="profil-pargf">
                <span className="font-bold">Languages & tools I work with</span>
                : HTML, CSS, JavaScript, TypeScript, React, Next.js, MySQL,
                Figma, Git, Netlify, Github & WordPress.
              </p>
              <p className="my-2 text-base sm:text-xl text-lightGray dark:text-darkGrey">
                In my regular day, I primarily use React and Next.js for
                building dynamic and interactive web applications. I also have
                experience with Figma for designing user interfaces and graphic
                design tasks. Recently, I've started exploring libraries like
                Anime.js and Three.js to add animations and 3D graphics to my
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}