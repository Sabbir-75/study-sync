import React, { useEffect } from 'react';
import { FaBullseye } from 'react-icons/fa6';
import { SiLevelsdotfyi } from 'react-icons/si';
import { useLoaderData } from 'react-router';
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import ContexData from '../../Hooks/AuthContext/ContexData';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';


const View = () => {
    const assignmentData = useLoaderData()
    const { userData } = ContexData()
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animation happens only once
        });
    }, []);

    const submissionHandler = (e, id, email) => {
        e.preventDefault()
        const assignmentId = id
        const submittedBy = email
        const docLink = e.target.docLink.value
        const note = e.target.note.value
        const status = "pending"
        const assignmentTitle = assignmentData.title
        const assignmentMarks = assignmentData.marks
        const submittedAt = new Date().toLocaleString();
        const sumittedData = {
            assignmentId,
            assignmentTitle,
            submittedBy,
            assignmentMarks,
            docLink,
            note,
            status,
            submittedAt,
            name: userData?.displayName,
            obtained: "",
            feedback: ""
        }
       
        axios.post("https://studysync-server-kappa.vercel.app/submitions", sumittedData)
            .then(data => {
                if (data.data.insertedId) {
                    document.getElementById('my_modal_5').close()
                    Swal.fire({
                        icon: "success",
                        title: "Your Assignment has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset()
                }
            })
            .catch(error => {
                
            })

    }

    return (
        <div data-aos="fade-up" className='max-w-6xl mx-auto px-4 py-3'>
            <Helmet>
                <title>StudySync || View</title>
            </Helmet>
            <div className='max-w-2xl mx-auto'>
                <div className="p-4 shadow-md bg-base-100 dark:text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={assignmentData.thumbnail_URL} alt={assignmentData.thumbnail_URL} className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 mb-7">
                            <h3 className="text-2xl font-semibold text-base-content">{assignmentData.title}</h3>
                            <p className="leading-snug flex gap-2 items-center text-primary-200 font-medium">{assignmentData.description}</p>
                            <p className="leading-snug flex gap-2 items-center text-primary-200 font-medium mt-3"><SiLevelsdotfyi />Difficulty level : <span className={`font-bold ${assignmentData.difficulty_level === "Medium" && "text-yellow-400"} ${assignmentData.difficulty_level === "Hard" ? "text-red-600" : "text-green-600"}`}>{assignmentData.difficulty_level}</span></p>
                            <p className="leading-snug flex gap-2 items-center text-primary-200 font-medium"><FaBullseye />Marks : {assignmentData.marks}</p>
                            <p className="leading-snug flex gap-2 items-center text-primary-200 font-medium"><IoMdPersonAdd />Assignment Creator : <span className='text-cyan-500'>{assignmentData.hr_name}</span></p>
                            <p className="leading-snug flex gap-2 items-center text-primary-200 font-medium text-lg"><FaRegCalendarAlt />Deadline : <span className='text-red-500'>{assignmentData.due_date}</span></p>
                        </div>
                        <div className='flex justify-center gap-4 w-full'>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="px-4 w-full py-1 rounded-sm text-primary-content cursor-pointer bg-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Take assignment</button>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="text-center text-base-content font-bold text-2xl">
                                        Assignment <span className='text-primary'>Submission</span> Form
                                    </h3>

                                    <div className="modal-action">
                                        <form
                                            onSubmit={(e) => submissionHandler(e, assignmentData._id, userData?.email)}
                                            className='w-full text-gray-200'
                                        >
                                            <fieldset className="fieldset space-y-2 rounded-box p-4">
                                                <label className="label">Google Docs Link</label>
                                                <input
                                                    required
                                                    type="url"
                                                    name='docLink'
                                                    className="input w-full"
                                                    placeholder="https://docs.google.com/document/..."
                                                />
                                                <label className="label">Note</label>
                                                <textarea
                                                    required
                                                    className="textarea w-full"
                                                    name='note'
                                                    placeholder="Your note"
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
            </div>
        </div>
    );
};

export default View;