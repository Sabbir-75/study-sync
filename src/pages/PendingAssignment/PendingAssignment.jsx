import React, { use, useEffect, useState } from 'react';
import PendingSingleData from './PendingSingleData';

const PendingAssignment = ({ pendingResDatas }) => {
    const data = use(pendingResDatas)

    const [assignmentDatas, setAssignmentDatas] = useState([])
    useEffect(() => {
        const remainingData = data.filter(singleData => singleData.status === "pending")
        setAssignmentDatas(remainingData)
    }, [data])
    return (
        <>
            {
                assignmentDatas.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
                        {

                            assignmentDatas.map(assignmentData => <PendingSingleData key={assignmentData._id} assignmentData={assignmentData} assignmentDatas={assignmentDatas} setAssignmentDatas={setAssignmentDatas}></PendingSingleData>)

                        }
                    </div >
                    :
                    <p className="text-center text-xl text-secondary mt-10">No data found.</p>
            }

        </>

    );
};

export default PendingAssignment;