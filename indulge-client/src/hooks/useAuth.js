import React, { useContext, createContext, useState, useEffect } from "react";

import { sendComfirmEmailApi, verifyEmailApi, registerApi, loginApi, renewAccessTokenApi, logoutApi } from "../apiServices/authApi";



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
            return true;
        })
    }
    const login = ({ email, password, type }) => {
        return loginApi({ email, password, type }).then(res => {
            setUser(res.data.payload.user);
            return true;
        })
    }
    const logout = () => {
        return logoutApi().then(res => {
            setUser(null);
        })
    }
    useEffect(() => {
        const renewTokens = async () => {
            try {
                const res = await renewAccessTokenApi();
                setUser(res.data.payload.user);
                setInterval(() => {
                    renewTokens();
                }, 1000 * 60 * 9);
            } catch (error) {
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
        logout,
        user,
    }

    return (
        <AuthContext.Provider value={value} >
            {/* after setting refresh token */}
            {!isAuthenticating && children}
        </AuthContext.Provider>
    )


}
