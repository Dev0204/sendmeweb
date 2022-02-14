import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Dashboard, Sponsors, SignIn, SignUp, Forgot, Profile, Reset, Settings, AboutUs, UpdateProfile } from "../containers";
import { useAuth } from "../helpers";
import { NotFound, Drawer } from '../components';

function RequireAuth({ children }) {
    let { isAuth } = useAuth();
    let location = useLocation();
    return isAuth === true ? children : <Navigate to="/signin" state={{ from: location }} replace />;
}

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Drawer />
                        <Dashboard />
                    </RequireAuth>
                }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset" element={<Reset />} />
            <Route
                path="/profile/:profileId"
                element={
                    <RequireAuth>
                        <Drawer />
                        <Profile />
                    </RequireAuth>
                }
            />
            <Route
                path="/sponsors"
                element={
                    <RequireAuth>
                        <Drawer />
                        <Sponsors />
                    </RequireAuth>
                }
            />
            <Route
                path="/settings"
                element={
                    <RequireAuth>
                        <Drawer />
                        <Settings />
                    </RequireAuth>
                }
            />
            <Route
                path="/about"
                element={
                    <RequireAuth>
                        <Drawer />
                        <AboutUs />
                    </RequireAuth>
                }
            />
            <Route
                path="/updateprofile"
                element={
                    <RequireAuth>
                        <Drawer />
                        <UpdateProfile />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}