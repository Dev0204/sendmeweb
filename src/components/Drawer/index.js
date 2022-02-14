import { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    UsersIcon,
    HomeIcon,
    UserIcon,
    XIcon,
    LogoutIcon,
    PhoneIcon,
    CogIcon,
    QuestionMarkCircleIcon,
    MenuIcon
} from '@heroicons/react/outline'
import { activeSelectedTab, userLogoutRequest } from '../../redux/actions';
import appLogo from '../../assets/images/app_logo.png';
import { urls } from '../../constants';

const navigation = [
    { id: 0, name: 'Dashboard', icon: HomeIcon, link: '/' },
    { id: 1, name: 'My Mission Feed', icon: UsersIcon, link: '/' },
    { id: 2, name: 'My Sponsors', icon: UsersIcon, link: '/sponsors' },
    { id: 3, name: 'My Profile', icon: UserIcon, link: '/' },
    { id: 4, name: 'About Us', icon: QuestionMarkCircleIcon, link: '/about' },
    { id: 5, name: 'Settings', icon: CogIcon, link: '/settings' },
    { id: 6, name: 'Contact Us', icon: PhoneIcon },
    { id: 7, name: 'Logout', icon: LogoutIcon },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Drawer() {
    const state = useSelector((state) => state.header);
    const dispatch = useDispatch();

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const selectedTab = (id) => {
        if (id == 7) {
            dispatch(userLogoutRequest())
        }
        dispatch(activeSelectedTab(id))
    }

    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-100">
          <body class="h-full">
          ```
        */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src={appLogo}
                                        alt="SendMe"
                                    />
                                </div>
                                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav className="px-2 space-y-1">
                                        {navigation.map((item, index) => (
                                            item.id == 6
                                                ? (
                                                    <a
                                                        key={item.name}
                                                        className={classNames(
                                                            state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                        )}
                                                        onClick={() => window.open(`mailto:${urls.SUPPORT_EMAIL_URL}?subject=&body=`)}
                                                    >
                                                        <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                ) : item.id == 7
                                                    ? (
                                                        <a
                                                            key={item.name}
                                                            className={classNames(
                                                                state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                            )}
                                                            onClick={() => dispatch(userLogoutRequest())}
                                                        >
                                                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                    )
                                                    : (

                                                        <Link
                                                            key={item.name}
                                                            to={item.link}
                                                            className={classNames(
                                                                state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                            )}
                                                            onClick={() => selectedTab(item.id)}
                                                        >
                                                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                            {item.name}
                                                        </Link>
                                                    )
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <img
                                className="h-8 w-auto"
                                src={appLogo}
                                alt="SendMe"
                            />
                            <h1 className="ml-4 text-3xl font-medium text-white">SendMe</h1>
                        </div>
                        <div className="mt-5 flex-1 flex flex-col">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {navigation.map((item, index) => (
                                    item.id == 6
                                        ? (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                                onClick={() => window.open(`mailto:${urls.SUPPORT_EMAIL_URL}?subject=&body=`)}
                                            >
                                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        ) : item.id == 7
                                            ? (
                                                <a
                                                    key={item.name}
                                                    className={classNames(
                                                        state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                    onClick={() => dispatch(userLogoutRequest())}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                    {item.name}
                                                </a>
                                            )
                                            : (

                                                <Link
                                                    key={item.name}
                                                    to={item.link}
                                                    className={classNames(
                                                        state.activeTab === index ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                    onClick={() => selectedTab(item.id)}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            )
                                ))}
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                            <a href="#" className="flex-shrink-0 group block">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-medium text-white">Tom Cook</p>
                                        {/* <Link
                                            to={'/updateprofile'}
                                            className="text-sm font-medium text-indigo-200 group-hover:text-white"
                                        >
                                            Edit Profile
                                        </Link> */}
                                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">Edit Profile</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}