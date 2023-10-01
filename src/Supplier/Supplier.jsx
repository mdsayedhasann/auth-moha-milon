/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext } from 'react';

export const AuthSupplier = createContext(null)

const Supplier = ({children}) => {
    const jinisPati = {name: 'dengu', medicine: 'Saline'} ;
    return (
        <AuthSupplier.Provider value={jinisPati}>
            {children}
        </AuthSupplier.Provider>
    );
};

export default Supplier;