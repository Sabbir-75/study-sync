import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

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

    const profileUpdate = (profile) => {
          setLoading(true)
          return updateProfile(auth.currentUser, profile)
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
        profileUpdate
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;