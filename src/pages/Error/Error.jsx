import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()
    return (
        <section className="flex items-center h-full p-16 bg-base-200 dark:text-gray-200">
            <Helmet>
                <title> Roommate Hunt || Error</title>
            </Helmet>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-800">
                        <span className="sr-only">Error</span><span className='text-neutral'>404</span>
                    </h2>
                    <p className="text-2xl text-base-content font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-base-content">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button onClick={() => navigate("/")} className="px-8 py-3 cursor-pointer font-semibold rounded bg-neutral text-neutral-content">Back to homepage</button>
                </div>
            </div>
        </section>
    );
};

export default Error;