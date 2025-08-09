import React, { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import PendingAssignment from './PendingAssignment';
import PendingRes from '../../Hooks/UseApi/PendingRes/PendingRes';
import { Helmet } from 'react-helmet';


const Pending = () => {
    const { pendingResDatas } = PendingRes()
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Helmet>
                <title>StudySync || Pending</title>
            </Helmet>
            <h1 className='text-center text-4xl font-bold text-base-content'>Pending <span className='text-primary'>Assignments</span></h1>
            <Suspense fallback={<div className='flex justify-center mt-20'>
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
                <PendingAssignment pendingResDatas={pendingResDatas()}></PendingAssignment>
            </Suspense>
        </div>
    );
};

export default Pending;