import React from 'react'
import { Children } from 'react';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext() //create a Context Object

const AuthContext = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")))

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
    </UserContext.Provider>
}

export default AuthContext