import React from 'react'

export function NotFound() {
    return (
        <>
            <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="flex-grow flex flex-col bg-white">
                        <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
                            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    Page not found
                                </h1>
                                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                                {/* <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Go back to Dashboard
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}