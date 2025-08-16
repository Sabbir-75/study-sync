import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";

const blogPosts = [
    {
        id: 1,
        title: "5 Tips to Ace Group Study Sessions",
        category: "Study Tips",
        date: "Aug 10, 2025",
        thumbnail: "https://i.ibb.co.com/Y4bfnDSz/Group-discussion.png",
    },
    {
        id: 2,
        title: "React Basics for Collaborative Projects",
        category: "Web Development",
        date: "Aug 12, 2025",
        thumbnail: "https://i.ibb.co.com/CKwKJPh1/images.jpg",
    },
    {
        id: 3,
        title: "Effective Time Management for Students",
        category: "Productivity",
        date: "Aug 14, 2025",
        thumbnail: "https://i.ibb.co.com/mVMYRXVD/hand-drawn-time-management-concept-23-2148843889.jpg",
    },
];

export default function BlogSection() {
    return (
        <section data-aos="fade-up" className="px-4 py-12">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                    Latest from <span className="text-primary">Our Blog</span>
                </h2>
                <p className="mt-2 text-base-content/65 max-w-2xl mx-auto">
                    Stay updated with study tips, project guides, and group-study insights.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map(post => (
                    <div className="bg-primary rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />

                        <div className="p-4 flex flex-col justify-between h-28">
                            <h3 className="text-xl text-white font-bold mb-4">{post.title}</h3>

                            {/* Row container: category left, date right */}
                            <div className="flex justify-between text-black items-center mt-auto">
                                <div className="flex items-center gap-2 font-semibold">
                                    <MdTipsAndUpdates className="" /> {post.category}
                                </div>
                                <div className="font-medium text-sm">{post.date}</div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
