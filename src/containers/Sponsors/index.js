import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const stats = [
    { name: 'Current Sponsors', stat: '0' },
    { name: 'Total Gifts', stat: '0.00' },
]

export function Sponsors() {
    const state = useSelector((state) => state.sponsors);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(sponsorsListRequest());
    }, []);

    return (
        <div className="md:pl-64 flex flex-col flex-1">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">My Sponsors</h1>
                </div>
            </header>
            {state.loading ? (
                <div className="flex flex-col mt-4" style={{ alignItems: 'center' }}>
                    <CircularProgress color='inherit' />
                </div>
            ) : (
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {stats.map((item) => (
                                <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </main>
            )}
        </div>
    )
}