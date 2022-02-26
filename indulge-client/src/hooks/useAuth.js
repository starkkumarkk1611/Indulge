import React, { useContext, createContext, useState, useEffect } from "react";

import { sendComfirmEmailApi, verifyEmailApi, registerApi, loginApi, renewAccessTokenApi } from "../apiServices/authApi";



const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const sendConfirmEmail = ({ email, type }) => {
        return sendComfirmEmailApi({ email, type })
    }
    const verifyEmail = ({ token, type }) => {
        return verifyEmailApi({ token, type })
    }
    const register = ({ email, name, type, password, repeatPassword, company, registerToken }) => {
        return registerApi({ email, name, type, password, repeatPassword, company, registerToken }).then((res) => {
            setUser(res.data.payload.user);
            console.log(res);
            return true;
        })
    }
    const login = ({ email, password, type }) => {
        return loginApi({ email, password, type }).then(res => {
            console.log(res.data)
            setUser(res.data.payload.user);
            return true;
        })
    }

    useEffect(() => {
        const renewTokens = async () => {
            try {

                const res = await renewAccessTokenApi();
                console.log(res.data)
                setUser(res.data.payload.user);
                setInterval(() => {
                    renewTokens();
                }, 1000 * 60 * 10);
            } catch (error) {
                console.log(error);
                setUser(null);
            }
            setIsAuthenticating(false);
        }
        renewTokens();
    }, [])

    const value = {
        sendConfirmEmail,
        verifyEmail,
        register,
        login,
        user,
        isAuthenticating,

    }

    return (
        <AuthContext.Provider value={value} >
            {/* after setting refresh token */}
            {!isAuthenticating && children}
        </AuthContext.Provider>
    )


}
