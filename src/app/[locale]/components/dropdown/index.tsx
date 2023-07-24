'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { usePathname, useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function TranslateDropdown() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const router = useRouter();

  const handleLanguageChange = () => {
    const newLocale = currentLocale === 'en' ? 'no' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md px-3 p-2 text-sm font-semibold text-white hover:text-[#d6d3d1] shadow-sm ring-2 ring-inset outline-none ring-gray-600 z-999 w-[45px] uppercase">
          {currentLocale}
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
                    active ? ' text-[#d6d3d1]' : 'text-white',
                    'block px-3 p-2 text-sm w-[45px]'
                  )}
                  onClick={handleLanguageChange}
                >
                  {currentLocale === 'en' ? 'NO' : 'EN'}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
