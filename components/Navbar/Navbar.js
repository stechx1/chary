import React from 'react';
import { useRef } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = ({ scrollToContact, scrollToOurResults, scrollToApproach, scrollToOurExpertise}) => {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Our Results', href: '#', current: true, onClick: scrollToOurResults },
    { name: 'Our Expertise', href: '#', current: true, onClick: scrollToOurExpertise },
    // {
    //   name: 'Services',
    //   href: '/',
    //   current: false,
    //   subItems: [
    //     { name: 'Paid Advertising', href: '/' },
    //     { name: 'Data and Analytics', href: '/' },
    //     { name: 'Marketing Automation', href: '/' },
    //   ],
    // },
    { name: 'Our Approach', href: '#', current: false, onClick: scrollToApproach },
    // { name: 'About', href: '/', current: false },
  ];
  const resultsRef = useRef(null);
  const expertiseRef = useRef(null);


  return (
    <Disclosure as='nav' className='my-3'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl py-2 px-2 sm:px-6 lg:px-6'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <i
                      style={{ fontSize: '18px' }}
                      className='fa fa-times block bg-[#6F3081] p-3 rounded-full text-gray-300 text-2xl '
                      aria-hidden='true'
                    ></i>
                  ) : (
                    <i
                      style={{ fontSize: '18px' }}
                      className='fa fa-bars block bg-[#6F3081] p-3 rounded-full text-gray-200  '
                      aria-hidden='true'
                    ></i>
                  )}
                </Disclosure.Button>
              </div>
              <img
                className='block h-[80px] w-auto md:ml-0 ml-5 '
                src='/images/logo.svg'
                alt='Your Company'
              />
              <div className='flex flex-1 items-center justify-center sm:items-stretch '>
                <div className='hidden lg:ml-6 lg:block'>
                  <div className='flex space-x-4 items-center'>
                    {navigation.map((item) => (
                      <Disclosure key={item.name} as='div' className='relative'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button onClick={item.onClick}
                              className={classNames(
                                item.current
                                  ? 'text-black hover:text-[#6F3081] transition duration-300 ease-in-out'
                                  : 'text-black hover:text-[#6F3081] transition duration-300 ease-in-out',
                                'px-5 py-2 text-[16px] font-medium cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <span className='flex items-center'>
                                {item.name}
                                {item.name === 'Services' && (
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? 'transform rotate-180' : '',
                                      'h-5 w-5 text-gray-500 ml-1 -mr-1'
                                    )}
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                            {item.name === 'Services' && (
                              <Transition
                                show={open}
                                enter='transition duration-200 ease-out'
                                enterFrom='opacity-0 translate-y-1'
                                enterTo='opacity-100 translate-y-0'
                                leave='transition duration-100 ease-in'
                                leaveFrom='opacity-100 translate-y-0'
                                leaveTo='opacity-0 translate-y-1'
                              >
                                <Disclosure.Panel
                                  className='absolute z-10 mt-2 py-2 w-64 bg-white rounded-md shadow-lg'
                                  static
                                >
                                  <div className='px-4 py-2'>
                                    {item.subItems.map((subItem) => (
                                      <a
                                        onClick={subItem.onClick}
                                        key={subItem.name}
                                        href={subItem.href}
                                        className='block p-4 text-[18px] text-gray-700 hover:text-white hover:bg-[#6F3081]'
                                      >
                                        {subItem.name}
                                      </a>
                                    ))}
                                  </div>
                                </Disclosure.Panel>
                              </Transition>
                            )}
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </div>
              </div>
              <div  onClick={scrollToContact} className='absolut inset-y-0 right-0 gap-3 lg:flex hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#6F3081] py-5 px-8 flex items-center rounded-full font-bold'>
                  <span className='z-10'>
                    {' '}
                    <a href='#'>
                      Contact Us
                    </a>
                    <i
                      className='fa fa-arrow-right text-white pl-2'
                      aria-hidden='true'
                    ></i>
                  </span>
                  <div className='absolute rounded-full opacity-20 left-0 bg-[#fcd0e6] z-0 w-20 h-20 ' />
                  <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden h-screen'>
            <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col items-center'>
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={item.onClick}
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-[#6F3081] text-white'
                      : 'text-black  hover:text-white',
                    'block rounded-md px-3 py-2 text-[24px] font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
