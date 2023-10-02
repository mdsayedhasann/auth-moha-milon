/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log( 'Observing current user inside UseEffect of Authprovider ' , currentUser );
        });
        return() => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {user , createUser, signInUser, logOut}
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