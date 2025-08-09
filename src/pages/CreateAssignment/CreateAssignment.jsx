import React, { useState } from 'react';
import createLottie from "../../assets/create.json"
import Lottie from 'lottie-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import ContexData from '../../Hooks/AuthContext/ContexData';
import { Helmet } from 'react-helmet';
const CreateAssignment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date);
    const due_date = selectedDate.toLocaleDateString()
    const { userData } = ContexData()

    const assignmentHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const assignmentData = Object.fromEntries(formData.entries())

        const allAssignData = {
            ...assignmentData,
            due_date
        }
        

        axios.post("https://studysync-server-kappa.vercel.app/assignments", allAssignData, {
            headers: {
                authorization: `Bearer ${userData?.accessToken}`
            }
        })
            .then(data => {
               
                if (data.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
             
            })
    }

    return (
        <form onSubmit={assignmentHandler} className='max-w-[800px] mx-auto bg-base-100 rounded-2xl border-t-4 border-base-300'>
            <Helmet>
                <title>StudySync || CreateAssignment</title>
            </Helmet>
            <div className='flex justify-center items-center gap-5'>
                <Lottie style={{ width: "30px" }} animationData={createLottie} loop={true}></Lottie>
                <h1 className='text-center text-3xl font-bold py-6'>Create Your Assignment</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-center'>
                <fieldset className="fieldset space-y-1 rounded-box p-4">

                    <label className="label">Title</label>
                    <input required type="text" name='title' className="input w-full" placeholder="title" />
                    <label className="label">Description</label>
                    <textarea required minLength={20} className="textarea w-full" name='description' placeholder="description"></textarea>
                </fieldset>
                <fieldset className="fieldset space-y-2 rounded-box p-4">

                    <label className="label">Marks</label>
                    <input required type="number" name='marks' className="input w-full" placeholder="marks" />
                    <label className="label">Thumbnail Image URL</label>
                    <input required type="url" name='thumbnail_URL' className="input w-full" placeholder="URL" />
                </fieldset>
                <fieldset className="fieldset space-y-1 rounded-box p-4">

                    <label className="label">Difficulty Level</label>
                    <select
                        name="difficulty_level"
                        required
                        className="select w-full"
                    >
                        <option value="">Select difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <label className="label">Due Date</label>
                    <div className="w-full flex justify-start border rounded-lg border-amber-50">
                        <DatePicker
                            className=" py-3 border-none focus:outline-none pl-3 px-2 text-base-content font-medium w-full"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                        />
                    </div>

                </fieldset>


                <fieldset className="fieldset space-y-1 rounded-box p-4">
                    <label className="font-medium text-lg text-base-300 text-center">Creator info</label>

                    <label className="label">Email</label>
                    <input type="email" name='hr_email' value={userData?.email} className="input w-full" />
                    {/* <input type="email" name='hr_email' value={user?.email} className="input" /> */}

                    <label className="label">Name</label>
                    <input type="text" name='hr_name' className="input w-full" value={userData?.displayName} />
                </fieldset>

            </div>
            <button className="btn w-full btn-primary mt-4">Add Assignment</button>
        </form>
    );
};

export default CreateAssignment;