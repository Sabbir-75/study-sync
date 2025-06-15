import React from 'react';
import { FaBullseye } from 'react-icons/fa6';
import { SiLevelsdotfyi } from 'react-icons/si';
import { useLoaderData } from 'react-router';
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

const View = () => {
    const assignmentData = useLoaderData()

    return (
        <div className='max-w-6xl mx-auto px-4 py-3'>
            <div className='max-w-2xl mx-auto'>
                <div className="p-4 shadow-md bg-base-100 dark:text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={assignmentData.thumbnail_URL} alt={assignmentData.thumbnail_URL} className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 mb-7">
                            <h3 className="text-2xl font-semibold text-base-content">{assignmentData.title}</h3>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium">{assignmentData.description}</p>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium mt-3"><SiLevelsdotfyi />Difficulty level : <span className={`font-bold ${assignmentData.difficulty_level === "Medium" && "text-yellow-400"} ${assignmentData.difficulty_level === "Hard" ? "text-red-600" : "text-green-600"}`}>{assignmentData.difficulty_level}</span></p>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium"><FaBullseye />Marks : {assignmentData.marks}</p>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium"><IoMdPersonAdd />Assignment Creator : <span className='text-cyan-500'>{assignmentData.hr_name}</span></p>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium text-lg"><FaRegCalendarAlt />Deadline : <span className='text-red-500'>{assignmentData.due_date}</span></p>
                        </div>
                        <div className='flex justify-center gap-4 w-full'>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="px-4 w-full py-1 rounded-sm text-neutral-content cursor-pointer bg-neutral" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;