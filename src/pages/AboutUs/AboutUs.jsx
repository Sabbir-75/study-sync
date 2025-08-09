import React from "react";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col items-center px-6 py-12 md:py-24">
            <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-8 md:p-16">
                <h1 className="text-4xl text-base-content font-extrabold mb-6 text-center">
                    About <span className="text-primary">StudySync</span> 
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image */}
                    <div className="flex-shrink-0 w-full md:w-1/2 rounded overflow-hidden shadow-md">
                        <img
                            src="https://i.ibb.co.com/73QLTj1/Shorelight-Study-Tips.jpg"
                            alt="Students studying together"
                            className="object-cover w-full h-64 md:h-full"
                            loading="lazy"
                        />
                    </div>

                    {/* Text content */}
                    <div className="md:w-1/2 text-base-content space-y-5">
                        <p className="text-lg leading-relaxed">
                            <strong>Study Sync</strong> is your trusted online platform dedicated to
                            creating a collaborative learning environment. We bring students,
                            educators, and exam enthusiasts together to share knowledge,
                            resources, and motivation — all in one seamless space.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Whether you're preparing for exams or looking to engage with a study
                            group, Study Sync offers innovative tools and interactive features
                            that make learning productive, organized, and enjoyable.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our mission is to empower learners by providing access to quality
                            study materials, collaborative study sessions, and up-to-date exam
                            resources — all while fostering a supportive community.
                        </p>

                        <p className="text-lg leading-relaxed font-semibold text-gray-900">
                            Join us today and sync your way to success!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
