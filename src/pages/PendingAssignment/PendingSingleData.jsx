import React from 'react';
import ContexData from '../../Hooks/AuthContext/ContexData';
import { FaBullseye } from 'react-icons/fa6';
import { IoMdPersonAdd } from 'react-icons/io';
import Swal from 'sweetalert2';
import axios from 'axios';

const PendingSingleData = ({ assignmentData, assignmentDatas, setAssignmentDatas }) => {
    const { userData } = ContexData()
    const openModal = () => {
        if (assignmentData.submittedBy !== userData?.email) {
            document.getElementById('my_modal_5').showModal()
        }
        else {
            return Swal.fire({
                icon: "error",
                title: "Oops...! This assignment created by you.",

            });
        }
    }
    const markHandler = (e, id) => {
        e.preventDefault()
        const obtained = e.target.marks.value
        const feedback = e.target.feedback.value
        const newData = {
            obtained,
            feedback,
            status: "completed"
        }
        axios.patch(`https://studysync-server-kappa.vercel.app/submitions/${id}`, newData)
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Mark submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remainingData = assignmentDatas.filter(assign => assign._id !== id)
                    setAssignmentDatas(remainingData)
                }
            })
    }
    return (
        <div className="p-4 shadow-md bg-base-100">
            <div className="space-y-4">
                <div className="space-y-2 mb-7">
                    <h3 className="text-2xl font-semibold text-base-content">{assignmentData.assignmentTitle}</h3>
                    <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium"><FaBullseye />Marks : {assignmentData.assignmentMarks}</p>
                    <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium"><IoMdPersonAdd />Examinee nName : <span className='text-cyan-500'>{assignmentData.name}</span></p>
                </div>
                <div className='flex justify-center gap-4 w-full'>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="px-4 py-1 rounded-sm text-neutral-content cursor-pointer bg-neutral" onClick={openModal}>Give Mark</button>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="text-center text-base-content font-bold text-2xl">
                                Give <span className='text-neutral'>Mark</span>
                            </h3>

                            <div className="modal-action">

                                <form
                                    onSubmit={(e) => markHandler(e, assignmentData._id, userData?.email)}
                                    className='w-full text-gray-200'
                                >
                                    <h1 className='px-4 text-sm font-semibold'> Google Docs Link : <span className='text-blue-600'><a href={assignmentData.docLink} target='_blank'>{assignmentData.docLink}</a></span></h1>
                                    <h1 className='px-4 text-sm font-semibold mt-2'> Note : {assignmentData.note}</h1>
                                    <fieldset className="fieldset space-y-2 rounded-box p-4">
                                        <label className="label">Marks</label>
                                        <input
                                            required
                                            type="number"
                                            name='marks'
                                            className="input w-full"
                                            placeholder="give mark"
                                        />
                                        <label className="label">Feedback</label>
                                        <textarea
                                            required
                                            className="textarea w-full"
                                            name='feedback'
                                            placeholder="Feedback"
                                        ></textarea>
                                    </fieldset>

                                    <div className='text-center px-4.5 mt-4'>
                                        <button
                                            type='submit'
                                            className='w-full py-1 rounded-bl-sm rounded-tr-sm text-white hover:bg-green-700 bg-green-600'
                                        >
                                            Submit
                                        </button>
                                    </div>

                                    <div className='px-6 mt-2 flex justify-end'>
                                        <button
                                            type='button'
                                            onClick={() => document.getElementById('my_modal_5').close()}
                                            className='px-4 py-1 rounded-sm text-white hover:bg-red-600 bg-red-500'
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default PendingSingleData;