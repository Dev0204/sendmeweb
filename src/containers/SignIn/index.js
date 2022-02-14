import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { CircularProgress } from '@mui/material';
import appLogo from '../../assets/images/app_logo.png';
import { userLoginRequest } from '../../redux/actions';
import './SignIn.css';

export function SignIn() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(userLoginRequest(values))
        },
        validate: values => {
            let errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.email) {
                errors.email = 'Email is required!'
            } else if (!regex.test(values.email)) {
                errors.email = "Invalid email format!";
            }

            if (!values.password) {
                errors.password = 'Password is required!'
            } else if (values.password.length < 4) {
                errors.password = "Password too short!";
            }

            return errors;
        }
    })

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={appLogo}
                        alt="SendMe"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        autoComplete="email"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        autoComplete="current-password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => { navigate('/forgot') }}>
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {state.loading ? <CircularProgress size={16} color='inherit' style={{ marginLeft: 8 }} /> : 'Sign in'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <p className="mt-2 text-center text-sm text-gray-600">
                                You don't have account?{' '}
                                <a className="font-medium text-indigo-600 hover:text-indigo-500 underline" onClick={() => { navigate('/register') }}>
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}