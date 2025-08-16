import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { useParams } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Dummy group data (3টি গ্রুপ)
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

export default function Groups() {
  const { id } = useParams();
  const navigate = useNavigate()
  const group = groupsData.find((g) => g.id === parseInt(id));
   useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animation happens only once
        });
    }, []);

  if (!group)
    return <p className="text-center mt-20 text-gray-600">Group not found.</p>;

  return (
    <div data-aos="fade-up" className="max-w-5xl mx-auto bg-base-100 rounded-2xl px-6 py-12">
      {/* Group Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={group.image}
          alt={group.title}
          className="w-full h-64 object-cover"
        />
        <h1 className="absolute bottom-4 left-6 text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
          {group.title}
        </h1>
      </div>

      {/* Group Info */}
      <div className="mt-8 space-y-6">
        {/* Description */}
        <p className="text-base-content">{group.description}</p>

        {/* Members */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Members ({group.members.length})
          </h2>
          <ul className="flex flex-wrap gap-3">
            {group.members.map((member, idx) => (
              <li
                key={idx}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-800"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">
            Upcoming Sessions
          </h2>
          <ul className="space-y-2">
            {group.sessions.map((session, idx) => (
              <li
                key={idx}
                className="p-4 border border-primary rounded-lg bg-base-100 flex justify-between items-center"
              >
                <span className="text-base-content font-medium">{session.topic}</span>
                <span className="text-base-content">{session.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Join/Leave Button */}
        <button onClick={() => navigate("/")} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Go Back
        </button>
      </div>
    </div>
  );
}
