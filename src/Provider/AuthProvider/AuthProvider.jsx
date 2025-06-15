import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
           setLoading(true)
           return signInWithPopup(auth, provider)
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
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUserData(currentuser)
            setLoading(false)
            console.log(currentuser);
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
        loading
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;