'use client';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'About me', href: '/#about', current: false },
  { name: 'My work', href: '/#projects', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const updatedNavigation = navigation.map((item) => {
    return {
      ...item,
      current: item.name === 'Home',
    };
  });

  return (
    <header id="header">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex items-center justify-center">
                    <div className="rounded-full bg-dark text-white border-2 border-solid border-white dark:border-white ">
                      <a
                        href={'/'}
                        className="w-14 h-14 flex items-center justify-center"
                      >
                        <span className="text-2xl font-bold">MA</span>
                      </a>
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-2">
                      {updatedNavigation.map((item) => (
                        <div key={item.name}>
                          <a href={item.href}>
                            <div
                              className={classNames(
                                item.current
                                  ? 'text-black font-semibold dark:text-gray-100'
                                  : 'text-gray-500 dark:text-gray-400',
                                'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                              <span
                                className={`h-[1px] inline-block bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full w-0 transition-[width] ease duration-300'
                                }`}
                              >
                                &nbsp;
                              </span>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="space-y-1 px-2 pb-3 pt-2 text-center">
                  {updatedNavigation.map((item) => (
                    <div key={item.name}>
                      <a href={item.href}>
                        <div
                          className={classNames(
                            item.current
                              ? 'py-2 pl-3 pr-4 text-black font-semibold dark:text-gray-100'
                              : 'py-2 pl-3 pr-4 text-gray-500 dark:text-gray-400 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white',
                            'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => {
                            close();
                          }}
                        >
                          {item.name}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
