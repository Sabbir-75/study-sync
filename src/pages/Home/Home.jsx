
// import { motion } from "framer-motion";
import React, { use } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles.css"
import { Link } from 'react-router';
import { BiLogIn } from 'react-icons/bi';
import ContexData from '../../Hooks/AuthContext/ContexData';

const response = fetch("/banner.json").then(res => res.json())
const Home = () => {
    const bannerData = use(response)
    const { userData } = ContexData()
    return (

        <div className='max-w-[1250px] mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerData.map(data =>
                        <SwiperSlide key={data.id} >
                            <div className='relative flex justify-center'>
                                <img src={data.img} alt={data.img} />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className='absolute top-[5%] md:top-[10%] lg:top-[15%]'>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}

                                        className='text-center text-neutral font-bold text-xl md:text-4xl lg:text-6xl'>{data.title}
                                    </motion.h1>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}

                                        className='text-center text-neutral font-bold text-xl md:text-4xl lg:text-6xl'>

                                        <Typewriter
                                            words={['Innovation', 'Novelty', 'Modernization', 'Improvement!']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </motion.h1>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className='text-center text-neutral my-2 md:mt-4 text-base md:text-xl lg:text-2xl'>{data.sub_title}</motion.h1>
                                    <div className='flex gap-3 justify-center'>
                                        <Link to={"/register"} className="rounded px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                            <span className="relative text-sm md:text-base">{data.button1}</span>
                                        </Link>
                                        {
                                            userData ? <Link className="rounded flex items-center px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                                <span className="relative text-sm md:text-base flex justify-center items-center gap-2">Registered</span>
                                            </Link> : <Link to={"/Signup"} className="rounded flex items-center px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                                <span className="relative text-sm md:text-base flex justify-center items-center gap-2"><BiLogIn size={20} /> {data.button2}</span>
                                            </Link>
                                        }

                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>)
                }
            </Swiper>
            <div className='max-w-[800px] mx-auto mt-10 '>
                <h1 className='text-center mb-10 text-4xl font-bold'>Frequently Asked <span className='text-neutral'>Questions</span></h1>
                <div className="join-vertical bg-base-100">
                    
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Q. What is StudySync?</div>
                        <div className="collapse-content text-sm bg-[#3e593e]">A. StudySync is an online group-study platform where students can collaborate, share study resources, and complete assignments together in a productive environment.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Q. How can I join a study group?</div>
                        <div className="collapse-content text-sm bg-[#3e593e]">A. After signing up, you can browse available groups or create your own. You can also receive invites from other students to join their group.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Q. Can I submit and manage assignments here?</div>
                        <div className="collapse-content text-sm bg-[#3e593e]">A. Yes! StudySync allows you to create, assign, submit, and track assignments within your study group.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Q. Can I chat or video call with my group members?</div>
                        <div className="collapse-content text-sm bg-[#3e593e]">A. Yes. StudySync supports group messaging, file sharing, and integration with third-party video call tools for better communication.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Q. Is StudySync free to use?</div>
                        <div className="collapse-content text-sm bg-[#3e593e]">A. Absolutely. Most core features like joining groups, sharing resources, and submitting assignments are free for all users.</div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;