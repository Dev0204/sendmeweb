import React from 'react'

export function SearchResult({ title }) {
    return (
        <>
            <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="flex-grow flex flex-col bg-white">
                        <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
                            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    {`${title} Not Found`}
                                </h1>
                                <p className="mt-2 text-base text-gray-500">Sorry, We're unable to find the data that you're looking for.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}