'use client';
import { GetStaticPropsContext } from 'next';
import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import TranslateDropdown from '../../dropdown';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'home', href: '#portfolio', current: true },
  { name: 'projects', href: '#projects', current: false },
  { name: 'about', href: '#about', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const t = useTranslations('navbar');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [updatedNavigation, setUpdatedNavigation] =
    useState<NavigationItem[]>(navigation);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const updatedNav = navigation.map((item) => {
        const element = document.querySelector(item.href) as HTMLElement;
        const offsetY = element?.offsetTop || 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const isCurrent =
          scrollY >= offsetY - windowHeight / 2 &&
          scrollY < offsetY + element.offsetHeight - windowHeight / 2;

        return {
          ...item,
          current: isCurrent,
        };
      });

      setUpdatedNavigation(updatedNav);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-dark opacity-[.98]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute top-[14px] right-[5px] flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 z-999"
                    onClick={handleMobileMenuToggle}
                  >
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

                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
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

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-2">
                      {updatedNavigation.map((item) => (
                        <div key={item.name}>
                          <a href={item.href}>
                            <div
                              className={classNames(
                                item.current
                                  ? 'font-semibold text-gray-100'
                                  : 'text-gray-400',
                                'rounded-md mx-4 pt-2 text-sm font-medium mt-2.5 relative group'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {t(item.name)}
                              <span
                                className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full w-0 transition-[width] ease duration-300'
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
                <div className="absolute inset-y-[18px] left-[75px] sm:hidden">
                  <TranslateDropdown />
                </div>
                <div className="mb-1 hidden sm:block ml-2">
                  <TranslateDropdown />
                </div>
              </div>
            </div>

            <Disclosure.Panel
              className={`navbar sm:hidden bg-dark h-full ${
                isMobileMenuOpen ? 'overflow-hidden' : ''
              }`}
            >
              {({ close }) => (
                <div className="space-y-1 px-2 pb-3 pt-2 fixed text-center top-1/2 left-0 right-0 transform -translate-y-1/2 mt-[-64px]">
                  {updatedNavigation.map((item) => (
                    <div
                      key={item.name}
                      className="navlink-sm h-[120px] flex justify-center w-full my-auto"
                    >
                      <a href={item.href} className="w-full my-auto">
                        <div
                          className={classNames(
                            item.current
                              ? 'py-2 pl-3 pr-4 font-semibold text-gray-100'
                              : 'py-2 pl-3 pr-4 text-gray-400 rounded md:hover:bg-transparent hover:bg-gray-700 hover:text-white',
                            'rounded-md mx-4 pt-2 font-medium mt-2.5 relative group'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => {
                            close();
                            handleMobileMenuToggle();
                          }}
                        >
                          {t(item.name)}
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../../../messages/${locale}.json`))
        .default,
    },
  };
}
