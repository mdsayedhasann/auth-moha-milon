/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const authInfo = {name: 'nodi sagor khal bil'}
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