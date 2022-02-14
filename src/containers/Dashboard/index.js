import React from 'react'
import { Link } from "react-router-dom";

const stats = [
    { name: 'Total No. of Missionaries', stat: '89' },
    { name: 'Total No. of Sponsors', stat: '74' },
    { name: 'Avg. No. of Sponsors / Mission', stat: '24.57%' },
]
const tabs = [
    { name: 'Dashboard', current: true, link: '/' },
    { name: 'Activity Feed', current: false, link: '/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Dashboard() {
    return (
        <div className="md:pl-64 flex flex-col flex-1">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Missionary Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                        {tabs.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className={classNames(
                                    item.current
                                        ? 'border-indigo-500 text-indigo-500'
                                        : 'border-transparent hover:text-gray-700 hover:border-gray-300',
                                    'inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                            </div>
                        ))}
                    </dl> */}
                </div>
            </main>
        </div>
    )
}