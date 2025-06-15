
import React from 'react';
import { SiLevelsdotfyi } from "react-icons/si";
import { FaBullseye } from "react-icons/fa6";
const Assignments = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 <div className="p-4 shadow-md bg-base-100 dark:text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-50 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 mb-7">
                            <h3 className="text-xl font-semibold text-base-content">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium mt-3"><SiLevelsdotfyi />Difficulty level : <span className={``}>100</span></p>
                            <p className="leading-snug flex gap-2 items-center text-neutral-200 font-medium"><FaBullseye />Marks : </p>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button className='px-4 py-1 rounded-sm text-white hover:bg-blue-600 bg-blue-500'>View</button>
                            <button className='px-4 py-1 rounded-sm text-white hover:bg-amber-500 bg-orange-400'>Update</button>
                            <button className='px-4 py-1 rounded-sm text-white hover:bg-red-600 bg-red-500'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Assignments;