// src/components/FeatureDetail.jsx
import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams, useNavigate } from 'react-router';

export default function FeatureDetail() {
    const allData = useLoaderData()
    console.log(allData);
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const feature = allData.find(f => f.id === Number(id));

    if (!feature) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
                <h2 className="text-3xl font-bold mb-4">Feature Not Found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    Back to Features
                </button>
            </div>
        );
    }

    // Extract feature keys excluding id, thumbnail, title, description
    const featureKeys = Object.keys(feature).filter(
        key => !['id', 'thumbnail', 'title', 'description'].includes(key)
    );

    return (
        <div className="max-w-3xl space-y-3 mx-auto p-6">
            <button onClick={() => navigate(-1)} className={`relative inline-flex items-center cursor-pointer justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group`}>
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                <span className={`relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-content flex justify-center items-center gap-2`}> &larr; Go Back</span>
                <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
            </button>

            <img
                src={feature.thumbnail}
                alt={feature.title}
                className="w-full h-64 object-cover rounded-lg mb-6 shadow"
            />

            <h1 className="text-4xl font-bold mb-4 text-primary">{feature.title}</h1>
            <p className="text-base-content mb-8">{feature.description}</p>

            <h2 className="text-2xl text-secondary font-semibold mb-4">Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-base-content">
                {featureKeys.map(key => (
                    <li key={key} className="capitalize">
                        <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span> {feature[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
}