import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="bg-blue-100 py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4">স্বাগতম Roommate Finder এ!</h1>
                <p className="text-lg text-gray-700">সহজে খুঁজে পান আপনার পছন্দের রুমমেট</p>
            </motion.div>
        </section>
    );
};

export default Home;