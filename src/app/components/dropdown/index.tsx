'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';
import useSetLanguage from '../setLanguage';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function TranslateDropdown() {
  const { lang, t } = useTranslation();
  const setLanguage = useSetLanguage();
  const handleLanguageChange = () => {
    const newLanguage = lang === 'en' ? 'no' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md px-3 p-2 text-sm font-semibold text-white shadow-sm ring-2 ring-inset outline-none  hover:bg-gray-700 ring-gray-600 z-999 w-[45px]">
          {lang === 'en' ? 'EN' : 'NO'}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-999 mt-[6px] origin-top-right rounded-md bg-gray-600 ring-2 ring-inset outline-none ring-gray-600">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-[#e3e3e3]' : 'text-white',
                    'block px-3 p-2 text-sm w-[45px]'
                  )}
                  onClick={handleLanguageChange}
                >
                  {lang === 'en' ? 'NO' : 'EN'}{' '}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
