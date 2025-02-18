
'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Members', href: '/members'},
  { name: 'Project', href: '/project'},
  { name: 'Publications', href: '/publications'},
 
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname()

  const [header, setHeader] = useState(false);
  let [current, setCurrent] = useState(pathname);

  useEffect(() => {
      const currentPath = pathname;
      const currentNav = navigation.find(nav => nav.href === currentPath);
      setCurrent(currentNav ? currentNav.name : 'Home');
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
        <div className="w-screen bg-primary h-10"></div>
        <h1 className="bg-white text-primary px-12 md:px-32 py-5 font-title text-3xl md:text-4xl font-bold uppercase">DHAKA UNIVERSITY LIFE & LANGUAGE (DULL) Research Group</h1>
        <hr />
    <div className={header ? "fixed top-0 z-10 w-screen border-b-2" : "w-screen"}>
      <Disclosure as="nav" className="bg-white">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-24">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 ml-8 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setCurrent(item.name)}
                        className={classNames(
                          current === item.name ? 'border-b-4 border-primary text-primary' : 'text-gray-700 hover:border-b-4 border-primary transition-all',
                          'px-3 py-4 text-lg font-medium font-title'
                        )}
                        aria-current={current === item.name ? 'page' : undefined}
                      >
                        {item.name}
                    </Link>
                  ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => { setCurrent(item.name); close(); }}
                  className={classNames(
                    current == item.name ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary hover:text-white',
                    'block rounded-md px-3 py-2 font-medium font-title'
                  )}
                  aria-current={current == item.name ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
    <hr />
    </div>
    
  )
}
