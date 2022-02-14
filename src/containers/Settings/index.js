import { Disclosure } from '@headlessui/react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { urls } from '../../constants'

const settings = [
    {
        title: 'Privacy Policy',
        link: urls.PRIVACY_POLICY_URL
    },
    {
        title: 'Terms and Conditions',
        link: urls.TERMS_AND_CONDITION_URL
    },

]

export function Settings() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            // dispatch(userLoginRequest(values))
        },
        validate: values => {
            let errors = {};

            if (!values.oldPassword) {
                errors.oldPassword = 'Old password is required!'
            }

            if (!values.newPassword) {
                errors.newPassword = 'New password is required!'
            } else if (values.newPassword.length < 4) {
                errors.newPassword = "New password too short!";
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Confirm password is required!'
            } else if (values.confirmPassword != values.newPassword) {
                errors.confirmPassword = "Confirm password is not match with newly entred password!";
            }

            return errors;
        }
    })
    return (
        <div className="md:pl-64 flex flex-col flex-1">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Settings</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {settings.map((value) => (
                            <div className="pt-6 text-left w-full flex justify-between items-start text-gray-400">
                                <span className="font-medium text-gray-900">{value.title}</span>
                                <a
                                    href={value.link}
                                    target="_blank"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {'View More'}
                                </a>
                            </div>
                        ))}
                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                            <span className="font-medium text-gray-900">Change Password</span>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                {open ? 'Cancel' : 'View More'}
                                            </button>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd">
                                        <form className="space-y-6" onSubmit={formik.handleSubmit}>
                                            <div>
                                                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                                                    Old Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="oldPassword"
                                                        name="oldPassword"
                                                        type="password"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.oldPassword}
                                                        autoComplete="current-password"
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                {formik.errors.oldPassword && formik.touched.oldPassword && <div className="error">{formik.errors.oldPassword}</div>}
                                            </div>

                                            <div>
                                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                                    New Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="newPassword"
                                                        name="newPassword"
                                                        type="password"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.newPassword}
                                                        autoComplete="current-password"
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                {formik.errors.newPassword && formik.touched.newPassword && <div className="error">{formik.errors.newPassword}</div>}
                                            </div>

                                            <div>
                                                <label htmlFor="confirm password" className="block text-sm font-medium text-gray-700">
                                                    Confirm Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        type="password"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.confirmPassword}
                                                        autoComplete="current-password"
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                {formik.errors.confirmPassword && formik.touched.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    {state.loading ? <CircularProgress size={16} color='inherit' style={{ marginLeft: 8 }} /> : 'Change Password'}
                                                </button>
                                            </div>
                                        </form>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </dl>
                </div>
            </main>
        </div>
    )
}