import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [themeChanger, setThemeChanger] = useState()
    const [token, setToken] = useState("")
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const profileUpdate = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
            setUserData(currentuser)
            setLoading(false)
            if (currentuser) {
                const useToken = await currentuser.getIdToken()
                setToken(useToken)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        createAccount,
        loginAccount,
        googleLogin,
        profileUpdate,
        logout,
        userData,
        setUserData,
        loading,
        themeChanger,
        setThemeChanger,
        setToken,
        token
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;