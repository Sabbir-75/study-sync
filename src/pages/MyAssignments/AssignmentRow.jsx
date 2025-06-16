import React from 'react';

const AssignmentRow = ({ index, singleData }) => {
    const { assignmentTitle, status, assignmentMarks, obtained, feedback} = singleData
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <h1 className="flex items-center">
                    <div className="">{assignmentTitle}</div>
                </h1>
            </td>
            <td className={`${status === "pending" ? "text-red-600" : "text-success"}`}>
                {status}
            </td>
            <td>{assignmentMarks}</td>
            <td>{obtained}</td>
            <td>{feedback}</td>
        </tr>
    );
};

export default AssignmentRow;