import React from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, CircularProgress } from '@mui/material';

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

export function UpdateProfile() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            profile_photo: null,
            name: '',
        },
        onSubmit: values => {
            console.log("Values ==>", values);
        },
        validate: values => {
            let errors = {};

            if (!values.name) {
                errors.name = 'Name is required!'
            }

            return errors;
        }
    })

    const handleCoverPhoto = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        formik.setFieldValue("profile_photo", file);
    }

    return (
        <div className="md:pl-64 flex flex-col flex-1">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Update Profile</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* <form className="sm:flex">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Notify me
                            </button>
                        </div>
                    </form> */}
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="file" onChange={(e) => handleCoverPhoto(e)} id="upload" accept="image/*" style={{ display: 'none' }} />
                            <label htmlFor="upload">
                                <Avatar
                                    src={formik.values.profile_photo}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        marginInline: 'auto',
                                        border: '1px solid rgba(0, 0, 0, 0.5)'
                                    }}
                                    alt="User Profile Pic"
                                />
                                <p className="mt-4 text-base font-small text-grey text-center">Change Profile Image</p>
                            </label>
                            {formik.errors.profile_photo && formik.touched.profile_photo && <div className="error text-center">{formik.errors.profile_photo}</div>}
                        </div>
                        <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 text-center">
                            drewm1128@protonmail.com
                        </label>
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    autoComplete="given-name"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {state.loading ? <CircularProgress size={16} color='inherit' style={{ marginLeft: 8 }} /> : 'Submit'}
                            </button>
                        </div>
                    </form>
                    {/* <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
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
                            // onClick={() => selectedTab(item.id)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div> */}
                </div>
            </main>
        </div>
    )
}