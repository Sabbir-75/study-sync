import React, { Suspense } from 'react';
import AssignmenysTable from './AssignmenysTable';
import ContexData from '../../Hooks/AuthContext/ContexData';
import MyAttemptedAssign from '../../Hooks/UseApi/MyAttemptedAssign/MyAttemptedAssign';
import { Blocks } from 'react-loader-spinner';


const MyAssignments = () => {
    const {assignmentAttempedRespons} = MyAttemptedAssign()
    const {userData} = ContexData()
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-4xl font-bold text-center  mb-10 text-base-content'>My Attempted <span className='text-neutral'>Assignments</span></h1>
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