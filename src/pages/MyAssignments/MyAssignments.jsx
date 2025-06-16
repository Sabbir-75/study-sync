import React, { Suspense } from 'react';
import AssignmenysTable from './AssignmenysTable';
import ContexData from '../../Hooks/AuthContext/ContexData';
import MyAttemptedAssign from '../../Hooks/UseApi/MyAttemptedAssign/MyAttemptedAssign';


const MyAssignments = () => {
    const {assignmentAttempedRespons} = MyAttemptedAssign()
    const {userData} = ContexData()
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-4xl font-bold text-center  mb-10 text-base-content'>My Attempted <span className='text-neutral'>Assignments</span></h1>
             <Suspense fallback={<h1>Loading..........</h1>}>
                   <AssignmenysTable assignmentAttempedRespons={assignmentAttempedRespons(userData?.email)}></AssignmenysTable>
             </Suspense>
        </div>
    );
};

export default MyAssignments;