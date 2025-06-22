import React, { use } from 'react';
import AssignmentRow from './AssignmentRow';

const AssignmenysTable = ({ assignmentAttempedRespons }) => {
    const myLists = use(assignmentAttempedRespons)
    
    return (
        <div className="overflow-x-auto rounded-2xl border-base-300 border">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className='bg-neutral text-black font-bold'>
                        <th>NO</th>
                        <th>TITLE</th>
                        <th>Status</th>
                        <th> Assignment Marks</th>
                        <th>Obtained Marks</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myLists.map((singleData, index) => <AssignmentRow key={singleData._id} index={index} singleData={singleData}></AssignmentRow>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default AssignmenysTable;