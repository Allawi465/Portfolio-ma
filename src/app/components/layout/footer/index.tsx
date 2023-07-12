'use client';
import { ImGithub } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutgoingMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-white w-full dark:bg-transparent relative">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between sm:flex-wrap">
          <div className="rounded-full sm:my-3 bg-dark text-white border-2 border-solid border-white dark:border-white inline-block">
            <a
              href="#header"
              className="w-14 h-14 flex items-center justify-center"
            >
              <span className="text-2xl font-bold">MA</span>
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-3 text-sm font-medium sm:mb-0 text-black dark:text-gray-400">
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
        <a
          href="#header"
          className="inline-block p-3 bg-black dark:bg-white dark:text-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out bottom-[6.9rem] sm:bottom-8 right-5 absolute border border-transparent dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white hover:bg-transparent hover:border-black hover:text-black"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </a>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()}
          <a
            href="https://github.com/Allawi465"
            className="hover:underline ml-1 text-base"
          >
            M.A
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
