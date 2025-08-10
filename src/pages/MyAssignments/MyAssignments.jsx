import React, { Suspense } from 'react';
import AssignmenysTable from './AssignmenysTable';
import ContexData from '../../Hooks/AuthContext/ContexData';
import MyAttemptedAssign from '../../Hooks/UseApi/MyAttemptedAssign/MyAttemptedAssign';
import { Blocks } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';


const MyAssignments = () => {
    const {assignmentAttempedRespons} = MyAttemptedAssign()
    const {userData} = ContexData()
    return (
        <div className='max-w-[1200px] mx-auto text-base-content'>
            <Helmet>
                <title>StudySync || MyAssignments</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-center  mb-10'>My Attempted <span className='text-primary'>Assignments</span></h1>
             <Suspense fallback={<div className='flex justify-center'>
                <Blocks
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true}
                        />
             </div>}>
                   <AssignmenysTable assignmentAttempedRespons={assignmentAttempedRespons(userData?.email)}></AssignmenysTable>
             </Suspense>
        </div>
    );
};

export default MyAssignments;