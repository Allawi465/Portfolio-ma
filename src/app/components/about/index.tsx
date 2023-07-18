import Tech from '../word-cloud/tech';
import Loading from '../loading';
export default function AboutMe() {
  return (
    <section id="about" className="py-4">
      <div className="py-4">
        <h3 className="text-center text-4xl md:pt-[100px] ml-3 py-2 text-white mt-7 md:mt-0">
          Om MA.
        </h3>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-3">
          <p className="max-w-[800px] leading-normal text-base sm:text-xl text-darkGrey">
            Jeg er utdannet Front-end utvikler fra Noroff School of technology
            and Digital media Norge. Jeg er lidenskapelig opptatt av koding og
            utfordringene det presenterer. Mye av tiden min bruker jeg på å
            utforske og videreutvikle ferdighetene mine innen de ulike språkene
            programmering. Jeg jobber hele tiden mot å innhente mer erfaring og
            håper på å en dag kunne jobbe som full stack developer.
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-full w-[800px] justify-between flex-wrap md:flex-nowrap gap-5">
          <div className="about-introduce-part2">
            <div className="max-w-full md:max-w-[400px]">
              <h6 className="uppercase font-bold my-3 text-white">Profil</h6>
              <p className="leading-normal text-base sm:text-xl text-darkGrey mb-2">
                Jeg er lokalisert i Norge, og har utforsket utvikler verdenen
                gjennom min utdanning på 2 år, samt gjennom egen utforskning.
                Dette har gjort at jeg har opparbeidet meg gode ferdigheter
                innenfor programmering og koding. Jeg er svært interessert i å
                lære og jobber alltid mot å nå nye høyder innenfor
                systemutvikling.
              </p>
              <div className="flex justify-between">
                <div>
                  <strong className="uppercase font-bold my-3 text-white">
                    Fullt navn:
                  </strong>
                  <p className="leading-normal text-base sm:text-xl text-darkGrey mb-2">
                    Mohammed Allawi
                  </p>
                </div>
                <div>
                  <strong className="uppercase font-bold my-3 text-white">
                    alder:
                  </strong>
                  <p className="text-base sm:text-xl text-darkGrey">25 år</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full md:max-w-[400px] flex justify-center">
            <div>
              <h6 className="uppercase font-bold my-3 text-white">
                ferdigheter:
              </h6>
              <p className="profil-pargf text-darkGrey">
                <span className="font-bold text-white ">
                  Språk og verktøy jeg jobber med.
                </span>
                : HTML, CSS, Sass, JavaScript, TypeScript, React, Next.js, Figma
                & Tailwind.
              </p>
              <p className="my-2 text-base sm:text-xl text-darkGrey mb-6 sm:mb-0">
                I min daglige rutine bruker jeg primært React og Next.js for å
                bygge dynamiske og interaktive webapplikasjoner. Jeg har også
                erfaring med Figma for å designe grafiske designoppgaver. Nylig
                har jeg begynt å utforske biblioteker som Anime.js og Three.js
                for å legge til animasjoner og 3D-grafikk i prosjektene mine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tech />
    </section>
  );
}
