/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user , createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * Create Context 
 * Set provider with value
 * Use the Auth provider in the main.jsx file
 * access children in the authProvider component as children and use it in the middle of the Provider
 * 
 */