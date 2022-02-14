import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
    { name: 'Profile', href: '#', current: true },
]
const profile = {
    coverImageUrl:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: {
        Phone: '(555) 123-4567',
        Email: 'ricardocooper@example.com',
        Title: 'Senior Front-End Developer',
        Team: 'Product Development',
        Location: 'San Francisco',
        Sits: 'Oasis, 4th floor',
        Salary: '$145,000',
        Birthday: 'June 8, 1990',
    },
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Profile(props) {
    const { state } = useLocation();

    const navigate = useNavigate();

    return (
        <>
            <div className="h-full flex">
                <main className="flex-1">
                    {/* Profile header */}
                    <div>
                        <div>
                            <img className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} alt="" />
                        </div>
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                <div className="flex">
                                    <img
                                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 bg-gray-200"
                                        src={`https://sendme.club/api/live/user_profile_photos/${state.user_profile_photo}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 truncate">{state.display_name}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        className={classNames(
                                            tab.current
                                                ? 'border-pink-500 text-gray-900'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                    >
                                        {tab.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Description list */}
                    <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            {/* {Object.keys(profile.fields).map((field) => ( ))} */}
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">{state.email}</dd>
                            </div>

                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900">{state.missionary_location ? state.missionary_location : 'Not Defined'}</dd>
                            </div>

                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Total Donation</dt>
                                <dd className="mt-1 text-sm text-gray-900">{`${state.total_donation} $`}</dd>
                            </div>

                            {state.cnt_total_sponsors && (
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Total Sponsors</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{state.cnt_total_sponsors}</dd>
                                </div>
                            )}

                            {state.current_month_donation && (
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Current Month Donation</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{`${state.current_month_donation} $`}</dd>
                                </div>
                            )}

                            {state.missionary_goal && (
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Missionarie Goal</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{`${state.missionary_goal} $`}</dd>
                                </div>
                            )}

                            {state.missionary_details && (
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">About Missionarie</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{state.missionary_details}</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </main>
            </div>
        </>
    )
}