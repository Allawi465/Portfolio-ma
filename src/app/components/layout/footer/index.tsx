'use client';
import { ImGithub } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutgoingMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer
      className="w-full bg-transparent"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="flex gap-2 items-center flex-row justify-between flex-wrap">
          <div
            className="flex items-center justify-center mt-1 ml-2"
            style={{ fontFamily: "'Sail', cursive" }}
          >
            <div className="bg-dark text-white ">
              <a
                href="#portfolio"
                className="w-14 h-14 flex items-center justify-center"
              >
                <span className="text-[22px] font-bold">MA</span>
              </a>
            </div>
          </div>
          <ul className="flex flex-wrap items-center text-sm font-medium mb-0 text-gray-400">
            <li className="flex items-center">
              <a href="https://github.com/Allawi465" className="p-2 m-1 ">
                <ImGithub size={25} />
              </a>
            </li>
            <li className="flex items-center">
              <a href="mailto:allawi465@gmail.com" className="p-2 m-1">
                <MdOutgoingMail size={25} />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/mohammed-allawi-89830621a/"
                className="p-2 m-1"
              >
                <AiFillLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()}
          <a
            href="https://github.com/Allawi465"
            className="hover:underline underline-offset-2 ml-1 text-[14px] mr-1"
          >
            M.A
          </a>
        </span>
      </div>
    </footer>
  );
}
