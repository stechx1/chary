import React, { useState, useRef } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', current: true },
    {
        name: 'Services',
        href: '/',
        current: false,
        subItems: [
            { name: 'Service 1' },
            { name: 'Service 2' },
            { name: 'Service 3' },
        ],
    },
    { name: 'Case Studies', current: false },
    { name: 'About', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
    // State to track if the Services dropdown should be open
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Ref to keep track of the dropdown panel
    const servicesDropdownRef = useRef(null);

    // Function to handle mouse enter event for the Services button
    const handleMouseEnter = () => {
        setIsServicesOpen(true);
    };

    // Function to handle mouse leave event for the Services button
    const handleMouseLeave = () => {
        setIsServicesOpen(false);
    };
    return (

        <Disclosure as="nav" className="my-3">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl py-2 px-2 sm:px-6 lg:px-6">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <i style={{ fontSize: '28px' }} className="fa fa-times block bg-[#fc3792] p-5 rounded-full text-gray-300 text-2xl " aria-hidden="true"></i>
                                    ) : (
                                        <i style={{ fontSize: '28px' }} className="fa fa-bars block text-3xl bg-[#fc3792] p-5 rounded-full text-gray-200  " aria-hidden="true"></i>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <img
                                className="block h-12 w-auto md:ml-0 ml-5 "
                                src="/images/logo.png"
                                alt="Your Company"
                            />
                            <div className="flex flex-1 items-center justify-center sm:items-stretch ">




                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="hidden lg:ml-6 lg:block"
                                >
                                    <div className="flex space-x-4 items-center">
                                        {navigation.map((item) => (
                                            <Disclosure key={item.name} as="div" className="relative">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button
                                                            onMouseEnter={() => item.name === 'Services' && setIsServicesOpen(true)}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'text-black hover:text-[#fc3792] transition duration-300 ease-in-out'
                                                                    : 'text-black hover:text-[#fc3792] transition duration-300 ease-in-out',
                                                                'px-5 py-2 text-[16px] font-medium cursor-pointer'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                        {item.name === 'Services' && (
                                                            <Transition
                                                                show={open || isServicesOpen} // Show the panel if the button is open or the mouse is on the Services button
                                                                enter="transition duration-200 ease-out"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition duration-100 ease-in"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >
                                                                <Disclosure.Panel
                                                                    ref={servicesDropdownRef}
                                                                    className="absolute z-50 mt-2 py-2 w-40 bg-white rounded-md shadow-lg"
                                                                    static
                                                                >
                                                                    <div className="px-4 py-2">
                                                                        {item.subItems.map((subItem) => (
                                                                            <Disclosure.Button
                                                                                key={subItem.name}
                                                                                className={classNames(
                                                                                    item.current
                                                                                        ? 'text-black hover:bg-[#fc3792] hover:text-white '
                                                                                        : 'text-black hover:bg-[#fc3792] hover:text-white',
                                                                                    'px-5 py-2 text-[16px] font-medium cursor-pointer'
                                                                                )}
                                                                                aria-current={item.current ? 'page' : undefined}
                                                                            >
                                                                                {subItem.name}
                                                                            </Disclosure.Button>
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
                            <div className="absolut inset-y-0 right-0 gap-3 lg:flex hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <div className='relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#fc3792] py-5 px-8 flex items-center rounded-full font-bold'>
                                    <span className='z-10'> Plan een Gesprek
                                        <i className="fa fa-arrow-right text-white pl-2" aria-hidden="true"></i>
                                    </span>
                                    <div className='absolute rounded-full opacity-20 left-0 bg-[#fcd0e6] z-0 w-20 h-20 ' />
                                    <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden h-screen">
                        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-center">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-[#fc3792] text-white' : 'text-black  hover:text-white',
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


    )
}

export default Navbar
