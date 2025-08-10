import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import ContexData from '../../Hooks/AuthContext/ContexData';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Lottie from 'lottie-react';
import createLottie from "../../assets/create.json"
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Update = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const { _id, title, description, marks, thumbnail_URL, difficulty_level, due_date } = data
    const { userData } = ContexData()
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animation happens only once
        });
    }, []);
    const [selectedDate, setSelectedDate] = useState(
        due_date ? new Date(due_date) : new Date()
    );
    const newDate = selectedDate.toLocaleDateString()


    const updateHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updated = Object.fromEntries(formData.entries())
        const updatedData = {
            ...updated,
            due_date: newDate
        }
        axios.patch(`https://studysync-server-kappa.vercel.app/assignment/${_id}`, updatedData)
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Assignment has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/assignments")
                }
            })
            .catch(error => {
                
            })

    }

    return (

        <form data-aos="fade-down" onSubmit={updateHandler} className='max-w-[800px] mx-auto text-base-content bg-base-100 rounded-2xl border-t-4 border-base-300'>
            <Helmet>
                <title>StudySync || Update</title>
            </Helmet>
            <div className='flex justify-center items-center gap-5'>
                <Lottie style={{ width: "30px" }} animationData={createLottie} loop={true}></Lottie>
                <h1 className='text-center text-3xl font-bold py-6'>Update Your Assignment</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-center'>
                <fieldset className="fieldset space-y-1 rounded-box p-4">

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input w-full" defaultValue={title} />
                    <label className="label">Description</label>
                    <textarea minLength={20} className="textarea w-full" name='description' defaultValue={description}></textarea>
                </fieldset>
                <fieldset className="fieldset space-y-2 rounded-box p-4">

                    <label className="label">Marks</label>
                    <input type="number" name='marks' className="input w-full" defaultValue={marks} />
                    <label className="label">Thumbnail Image URL</label>
                    <input type='url' name='thumbnail_URL' className="input w-full" defaultValue={thumbnail_URL} />
                </fieldset>
                <fieldset className="fieldset space-y-1 rounded-box p-4">


                    <label className="label">Difficulty Level</label>
                    <select name='difficulty_level' defaultValue={difficulty_level} className="select w-full">
                        <option disabled={true}>Pick a currency</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
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
                    <label className="font-medium text-center text-secondary">Creator info</label>

                    <label className="label">Email</label>
                    <input type="email" name='hr_email' value={userData?.email} className="input w-full" />
                    {/* <input type="email" name='hr_email' value={user?.email} className="input" /> */}

                    <label className="label">Name</label>
                    <input type="text" name='hr_name' className="input w-full" value={userData?.displayName} />
                </fieldset>

            </div>
            <button className="btn w-full btn-primary mt-4">Update</button>
        </form>
    );
};

export default Update;