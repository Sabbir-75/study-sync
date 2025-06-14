import React, { useState } from 'react';
import createLottie from "../../assets/create.json"
import Lottie from 'lottie-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const CreateAssignment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date);
    const newDate = selectedDate.toLocaleDateString()

    const assignmentHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const assignmentData = Object.fromEntries(formData.entries())

        const allAssignData = {
            ...assignmentData,
            newDate
        }
        console.log(allAssignData);
    }

    return (
        <form onSubmit={assignmentHandler} className='max-w-[800px] mx-auto bg-base-100 rounded-2xl border-t-4 border-base-300'>
            <div className='flex justify-center items-center gap-5'>
                <Lottie style={{ width: "30px" }} animationData={createLottie} loop={true}></Lottie>
                <h1 className='text-center text-3xl font-bold py-6'>Create Your Assignment</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-center'>
                <fieldset className="fieldset space-y-1 rounded-box p-4">

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input w-full" placeholder="title" />
                    <label className="label">Description</label>
                    <textarea className="textarea w-full" name='description' placeholder="description"></textarea>
                </fieldset>
                <fieldset className="fieldset space-y-2 rounded-box p-4">

                    <label className="label">Marks</label>
                    <input type="number" name='marks' className="input w-full" placeholder="marks" />
                    <label className="label">Thumbnail Image URL</label>
                    <input type="text" name='thumbnail_URL' className="input w-full" placeholder="URL" />
                </fieldset>
                <fieldset className="fieldset space-y-1 rounded-box p-4">


                    <label className="label">Difficulty Level</label>
                    <select name='difficulty_level' className="select w-full">
                        <option disabled={true}>Pick a currency</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <label className="label">Due Date</label>
                    <div className="w-full  flex justify-start border rounded-lg border-amber-50">
                        <DatePicker
                            className=" py-3 border-none focus:outline-none pl-3 px-2 text-base-content font-medium w-full"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                        />
                    </div>

                </fieldset>


                <fieldset className="fieldset space-y-1 rounded-box p-4">
                    <label className="font-medium text-center">Creator info</label>

                    <label className="label">Email</label>
                    <input type="email" name='hr_email' placeholder='email' className="input w-full" />
                    {/* <input type="email" name='hr_email' value={user?.email} className="input" /> */}

                    <label className="label">Name</label>
                    <input type="text" name='hr_name' className="input w-full" placeholder="name" />
                </fieldset>

            </div>
            <button className="btn w-full btn-neutral mt-4">Login</button>
        </form>
    );
};

export default CreateAssignment;