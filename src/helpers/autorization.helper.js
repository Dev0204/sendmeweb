import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const authContext = React.createContext();

export function useAuth() {
    const isAuth = useSelector((state) => state.user.isAuth);
    return { isAuth };
}

export function AuthProvider({ children }) {
    const auth = useAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}