import React from 'react';
import UseAxioxSecure from '../../UseAxiosSecure/UseAxioxSecure';



const PendingRes = () => {
    const useSecure = UseAxioxSecure()

    const pendingResDatas = () => {
        return useSecure.get("/submitions")
            .then(res => res.data)
    }
    return { pendingResDatas }
};

export default PendingRes;