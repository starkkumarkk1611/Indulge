import React, { useState, useEffect, useContext, createContext } from "react";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged, updateProfile,
} from 'firebase/auth';
import { app } from '../configs/firebaseConfig'
import { serverSignIn, serverSignUp } from "../apiServices/authApi";


const auth = getAuth(app) // auth instance

const AuthContext = createContext()

//hooks for child component to get the auth object ...
// and re-render when it changes

export const useAuth = () => {
    return useContext(AuthContext)
}

//provider hook that create auth object and handlle state

export const AuthProvider = ({ children }) => {

    const [tempUser, setTempUser] = useState(null)
    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)


    const createUserEmailAndPassword = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password) // creating user
            .then(async userCredential => {
                setTempUser(userCredential.user)
                return true;
            })
    }


    const backendSignUp = async (tagFollowed, fullName, profileImageURL) => {
        return serverSignUp({
            email: tempUser.email,
            fullName: fullName,
            profileImageURL: profileImageURL,
            tagsFollowed: tagFollowed,
            token: tempUser.accessToken
        }).then(res => {
            setUser({ ...res.data.payload.user, ...tempUser });
        }).then(() => {
            return updateProfile(tempUser, { displayName: fullName, photoURL: profileImageURL })
        });
    }


    const signInEmailAndPassword = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password) //firebase sign in
            .then(async userCredential => {
                setTempUser(userCredential.user);
                const res = await serverSignIn(userCredential.user.accessToken) // server sign in
                return { ...userCredential.user, ...res.data.payload.user }
            })
            .then(user => {
                setUser(user) //updating user state
                return true
            })
    }

    const logout = async () => {
        return signOut(auth).then(() => {
            setUser(null)
        })
    }
    //====================================================================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                var res = await serverSignIn(user.accessToken)
                setUser({ ...user, ...res.data.payload.user })
            } catch (error) {
                setTempUser(user);
                setUser(null);
            }
            setIsAuthenticating(false)
        })
        //clean subscriptionon unmount
        return () => unsubscribe()

        // eslint-disable-next-line
    }, [])

    const value = {
        user,
        setUser,
        tempUser,
        isAuthenticating,
        createUserEmailAndPassword,
        signInEmailAndPassword,
        logout,
        backendSignUp,
    }

    return (
        <AuthContext.Provider value={value} >
            {!isAuthenticating && children}
        </AuthContext.Provider>
    )


}
