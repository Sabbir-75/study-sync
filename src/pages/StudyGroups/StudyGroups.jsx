import React from "react";
import { useNavigate } from "react-router-dom";

// Dummy login check (replace with your auth logic)
const isLoggedIn = false; // true/false according to auth state

const groupsData = [
    {
        id: 1,
        title: "Math Problem Solving Group",
        description:
            "Join peers to tackle challenging math problems, share tips, and prepare for exams together.",
        image: "https://source.unsplash.com/800x400/?math,classroom",
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
        image: "https://source.unsplash.com/800x400/?coding,students",
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
        image: "https://source.unsplash.com/800x400/?physics,study",
        members: ["Jack", "Karen", "Leo", "Mona", "Nina"],
        sessions: [
            { date: "2025-08-22", topic: "Mechanics Discussion" },
            { date: "2025-08-24", topic: "Electricity & Magnetism" },
        ],
    },
];


export default function StudyGroupsSection() {
    const navigate = useNavigate();

    const handleJoinGroup = (groupId) => {
        if (isLoggedIn) {
            // Logged-in user → go to group details
            navigate(`/groups/${groupId}`);
        } else {
            // Not logged-in → redirect to login page
            navigate("/login");
        }
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-600">Active Study Groups</h2>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                        Collaborate, learn, and grow together with fellow students in our vibrant online study groups.
                    </p>
                </div>

                {/* Study Groups Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {groupsData.map((group) => (
                        <div
                            key={group.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            <img
                                src={group.image}
                                alt={group.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-blue-500 font-semibold uppercase">
                                    {group.level}
                                </span>
                                <h3 className="text-xl font-semibold mt-2 text-gray-800">
                                    {group.title}
                                </h3>
                                <p className="mt-2 text-gray-600">{group.description}</p>
                                <div className="mt-3 text-sm text-gray-500">
                                    👥 {group.members} members
                                </div>
                                <button
                                    onClick={() => handleJoinGroup(group.id)}
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Join Group
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
