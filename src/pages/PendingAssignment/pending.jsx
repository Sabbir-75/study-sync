import React, { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import PendingAssignment from './PendingAssignment';


const pending = () => {
    const pendingResDatas = fetch("http://localhost:5000/submitions").then(res => res.json())
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-center text-4xl font-bold text-base-content'>Pending <span className='text-neutral'>Assignments</span></h1>
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
                <PendingAssignment pendingResDatas={pendingResDatas}></PendingAssignment>
            </Suspense>
        </div>
    );
};

export default pending;