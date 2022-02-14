import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import appLogo from '../../assets/images/app_logo.png';
import { userForgotPasswordRequest } from '../../redux/actions';
import './Forgot.css';

export function Forgot() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            dispatch(userForgotPasswordRequest(values))
        },
        validate: values => {
            let errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.email) {
                errors.email = 'Email is required!'
            } else if (!regex.test(values.email)) {
                errors.email = "Invalid email format!";
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
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
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
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {state.loading ? <CircularProgress size={16} color='inherit' style={{ marginLeft: 8 }} /> : 'Send Code'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Return to{' '}
                                <a className="font-medium text-indigo-600 hover:text-indigo-500 underline" onClick={() => { navigate(-1) }}>
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}