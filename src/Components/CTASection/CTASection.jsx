import React from "react";
import ContexData from "../../Hooks/AuthContext/ContexData";
import { useNavigate } from "react-router";

export default function CTASection() {
    const { userData } = ContexData()
    const navigate = useNavigate()
    return (
        <section className="bg-primary text-white px-4 py-12 rounded-xl relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Boost Your Group Study?
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    Join Study Sync today and collaborate with learners worldwide. Stay motivated, track progress, and ace your exams together!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button onClick={() => navigate("/login")} disabled={!!userData} className={`px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition`}>
                        {
                        userData ? "Already a member" : "  Join Now"
                        }
                       
                    </button>
                    <button onClick={() => navigate("/assignments")} className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
                        Learn More
                    </button>
                </div>
            </div>
            {/* subtle background accent */}
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
        </section>
    );
}
