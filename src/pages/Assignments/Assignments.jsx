
import React, { useEffect, useState } from 'react';
import { SiLevelsdotfyi } from "react-icons/si";
import { FaBullseye } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import ContexData from '../../Hooks/AuthContext/ContexData';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Blocks } from 'react-loader-spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Assignments = () => {


    const [assignAllData, setAssignmentAllData] = useState([]);
    const { userData } = ContexData()
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animation happens only once
        });
    }, []);

    const deleteHaandler = (id, data) => {
        if (userData) {
            if (userData?.email === data.hr_email) {


                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`https://studysync-server-kappa.vercel.app/assignment/${id}`)
                            .then(data => {
                                if (data.data.deletedCount) {
                                    const remainingAssignment = assignAllData.filter(data => data._id !== id)
                                    setAssignmentAllData(remainingAssignment)
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                }
                            })
                            .catch((error) => {

                            })
                    }
                });


            }
            else {
                return Swal.fire({
                    icon: "error",
                    title: "Oops...! This assignment was not created by you.",

                });
            }
        }
        else {
            navigate("/login")
        }
    }

    const viewHandler = (id) => {
        navigate(`/view/${id}`)
    }


    // By Using Hooks


    const [difficulty, setDifficulty] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAssignments = async () => {
            const res = await axios.get(`https://studysync-server-kappa.vercel.app/assignments?difficulty=${difficulty}&search=${search}`,);
            setAssignmentAllData(res.data);
        };

        fetchAssignments();
    }, [difficulty, search]);

    const updateHandler = (id, data) => {
        if (userData) {
            if (userData?.email === data.hr_email) {
                navigate(`/update/${id}`)
            }
            else {
                return Swal.fire({
                    icon: "error",
                    title: "Oops...! This assignment was not created by you.",

                });
            }
        }
        else {
            navigate("/login")
        }


    }
    return (

        <div className='max-w-7xl mx-auto px-4 py-12'>
            <Helmet>
                <title>StudySync || Assignments</title>
            </Helmet>
            <div className="max-w-[400px] text-base-content mx-auto flex gap-4 mb-4">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by title"
                    className="input input-bordered border border-primary"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Difficulty Filter */}
                <select
                    className="select select-bordered border border-primary"
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>


            {


                (assignAllData.length > 0) ?
                    <div className='max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            assignAllData.map(data => <div data-aos="fade-up" key={data._id} className="p-4 shadow-md bg-base-100 dark:text-gray-800">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={data.thumbnail_URL} alt={data.thumbnail_URL} className="block object-cover object-center w-full rounded-md h-50 dark:bg-gray-500" />
                                    </div>
                                    <div className="space-y-2 mb-7">
                                        <h3 className="text-2xl font-semibold text-base-content">{data.title}</h3>
                                        <p className="leading-snug flex gap-2 items-center text-base-content font-medium mt-3"><SiLevelsdotfyi />Difficulty level : <span className={`font-bold ${data.difficulty_level === "Medium" && "text-yellow-400"} ${data.difficulty_level === "Hard" ? "text-red-600" : "text-green-600"}`}>{data.difficulty_level}</span></p>
                                        <p className="leading-snug flex gap-2 items-center text-base-content font-medium"><FaBullseye />Marks : {data.marks}</p>
                                    </div>
                                    <div className='flex justify-center gap-4'>
                                        <button onClick={() => viewHandler(data._id)} className='px-4 py-1 rounded-sm text-white hover:bg-blue-600 bg-blue-500'>View</button>
                                        <button onClick={() => updateHandler(data._id, data)} className='px-4 py-1 rounded-sm text-white hover:bg-amber-500 bg-orange-400'>Update</button>
                                        <button onClick={() => deleteHaandler(data._id, data)} className='px-4 py-1 rounded-sm text-white hover:bg-red-600 bg-red-500'>Delete</button>

                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                    :
                    <div className='flex justify-center mt-28'>
                        <Blocks
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true}
                        />
                    </div>
            }

        </div>

    );
};

export default Assignments;