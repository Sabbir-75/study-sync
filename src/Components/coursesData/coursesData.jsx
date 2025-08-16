import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function StudyGroupsSection() {
    const groupsData = [
        {
            id: 1,
            title: "Math Problem Solving Group",
            description:
                "Join peers to tackle challenging math problems, share tips, and prepare for exams together.",
            image: "https://i.ibb.co.com/RGVcsbfs/istockphoto-636332456-612x612.jpg",
            members: ["Alice", "Bob", "Charlie", "David", "Emma"],
            sessions: [
                { date: "2025-08-18", topic: "Algebra Practice" },
                { date: "2025-08-20", topic: "Geometry Problems" },
            ],
        },
        {
            id: 2,
            title: "Web Development Study Circle",
            description:
                "Collaborate on projects, learn HTML, CSS, JavaScript, and modern frameworks like React.",
            image: "https://i.ibb.co.com/r2jCncJc/360-F-214879686-R3-HFJlk6-WLr1kcdvy6-Q9rt-NASKN0-BZBS.jpg",
            members: ["Eve", "Frank", "Grace", "Hannah", "Ivan"],
            sessions: [
                { date: "2025-08-19", topic: "React Basics" },
                { date: "2025-08-21", topic: "Tailwind UI" },
            ],
        },
        {
            id: 3,
            title: "Physics & Engineering Forum",
            description:
                "Discuss concepts, solve problems, and explore the latest in physics and engineering.",
            image: "https://i.ibb.co.com/nqRYgw2Q/Physics.jpg",
            members: ["Jack", "Karen", "Leo", "Mona", "Nina"],
            sessions: [
                { date: "2025-08-22", topic: "Mechanics Discussion" },
                { date: "2025-08-24", topic: "Electricity & Magnetism" },
            ],
        },
    ];
    const navigate = useNavigate()
    return (
        <section data-aos="fade-up" className="px-4 py-12">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h1 className='text-center mb-4 md:mb-10 text-base-content text-xl md:text-3xl lg:text-4xl font-bold'>Active Study <span className='text-primary'>Groups</span></h1>
                    <p className="mt-2 text-base-content text-base max-w-2xl mx-auto">
                        Collaborate, learn, and grow together with fellow students in our vibrant online study groups.
                    </p>
                </div>

                {/* Study Groups Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {groupsData.map((group) => (
                        <div
                            key={group.id}
                            className="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            <img
                                src={group.image}
                                alt={group.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-base-content font-semibold uppercase">
                                    {group.level}
                                </span>
                                <h3 className="text-xl font-semibold mt-2 text-base-content">
                                    {group.title}
                                </h3>
                                <p className="mt-2 text-base-content">{group.description}</p>
                                <div className="mt-3 text-sm flex items-center gap-1 text-green-700">
                                    <FaUserGroup /> {group.members.join(' ')} members
                                </div>
                                <button onClick={() => navigate(`join/group/${group.id}`)} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
         
        </section>
    );
}
