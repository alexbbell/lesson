import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ( {children}) => {

    const [user, setUser] = useState(null);

    const signin = (newUser, cb) => {
        setUser(newUser);
    } ;
    const signout = (cb) => {
        setUser(null);
        cb();
    } ;

    const value = {user, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}