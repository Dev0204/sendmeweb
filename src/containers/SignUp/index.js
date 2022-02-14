import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isNull } from 'lodash';
import { useFormik } from 'formik';
import { Avatar, CircularProgress } from '@mui/material';
import appLogo from '../../assets/images/app_logo.png';
import { userRegistrationRequest } from '../../redux/actions';
import './Signup.css';
import { urls } from '../../constants';

export function SignUp() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            profile_photo: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false
        },
        onSubmit: values => {
            let registerData = {
                display_name: values.firstName + values.lastName,
                email: values.email,
                password: values.password,
                profile_photo: values.profile_photo,
                user_time_zone: 'Asia/Kolkata'
            }
            dispatch(userRegistrationRequest(registerData))
        },
        validate: values => {
            let errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if (isNull(values.profile_photo)) {
                errors.profile_photo = 'Please upload profile picture!'
            }

            if (!values.firstName) {
                errors.firstName = 'Firstname is required!'
            }

            if (!values.lastName) {
                errors.lastName = 'Lastname is required!'
            }

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

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Confirm password is required!'
            } else if (values.confirmPassword != values.password) {
                errors.confirmPassword = "Confirm password is not match with password!";
            }

            return errors;
        }
    })

    const handleCoverPhoto = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        formik.setFieldValue("profile_photo", file);
    }

    const handleChecked = () => {
        formik.setFieldValue("acceptTerms", !formik.values.acceptTerms);
    }

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={appLogo}
                        alt="SendMe"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                                </label>
                                {formik.errors.profile_photo && formik.touched.profile_photo && <div className="error text-center">{formik.errors.profile_photo}</div>}
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstName}
                                            autoComplete="given-name"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    {formik.errors.firstName && formik.touched.firstName && <div className="error">{formik.errors.firstName}</div>}
                                </div>

                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.lastName}
                                            autoComplete="family-name"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    {formik.errors.lastName && formik.touched.lastName && <div className="error">{formik.errors.lastName}</div>}
                                </div>
                            </div>

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

                            <div className="flex items-center">
                                <input
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    checked={formik.values.acceptTerms}
                                    onChange={handleChecked}
                                    className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <p className="ml-2 block text-sm text-gray-900">
                                    By selecting, I agree to the{' '}
                                    <a
                                        href={urls.TERMS_AND_CONDITION_URL}
                                        target="_blank"
                                        className="font-medium text-indigo-600 hover:text-indigo-500 underline"
                                    >
                                        Terms & Conditions
                                    </a>
                                    {' '}and{' '}
                                    <a
                                        href={urls.PRIVACY_POLICY_URL}
                                        target="_blank"
                                        className="font-medium text-indigo-600 hover:text-indigo-500 underline"
                                    >
                                        Privacy Policy
                                    </a>.
                                </p>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {state.loading ? <CircularProgress size={16} color='inherit' style={{ marginLeft: 8 }} /> : 'Sign Up'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Already have an account?{' '}
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