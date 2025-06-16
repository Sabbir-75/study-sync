import React from 'react';
import UseAxioxSecure from '../../UseAxiosSecure/UseAxioxSecure';


const MyAttemptedAssign = () => {
    const useSecure = UseAxioxSecure()

    const assignmentAttempedRespons = (email) => {
        return useSecure.get(`/submitions?email=${email}`)
        .then(res => res.data)
    }
    return {assignmentAttempedRespons}
};

export default MyAttemptedAssign;