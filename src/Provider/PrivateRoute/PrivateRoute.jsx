import React from 'react';
import ContexData from '../../Hooks/AuthContext/ContexData';
import { Blocks } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { userData, loading } = ContexData()
    const location = useLocation()

    if (loading) {
        return <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
        />
    }
    if(!userData){
        return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;