import axios from 'axios';
import React from 'react';
import ContexData from '../AuthContext/ContexData';

const axiosInstance = axios.create({
    baseURL: 'https://studysync-server-kappa.vercel.app',
});

const UseAxioxSecure = () => {

    const { userData, logout } = ContexData()

    // for Request 
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${userData?.accessToken}`
        return config
    })
    // For Response

    axiosInstance.interceptors.response.use(
        res => res,
        error => {
            if (error.status === 401 || error.status === 403) {
                logout()
                    .then(() => {
                        console.log(`You are Logout because of an error with ${error.status} code`);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    )

    return axiosInstance
};

export default UseAxioxSecure;