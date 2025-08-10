
import React, { use, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import question from "../../assets/question.json"
import "./styles.css"
import { Link } from 'react-router';
import { BiLogIn } from 'react-icons/bi';
import ContexData from '../../Hooks/AuthContext/ContexData';
import Lottie from 'lottie-react';
import FeaturesSection from '../../Components/Feature/Feature';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const response = fetch("/banner.json").then(res => res.json())
const Home = () => {
    const bannerData = use(response)
    const { userData } = ContexData()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animation happens only once
        });
    }, []);

    return (

        <>
            <div>
                <Helmet>
                    <title>StudySync || Home</title>
                </Helmet>
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
                    className="mySwiper rounded-xl"
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

                                            className='text-center text-white font-bold text-xl md:text-4xl lg:text-6xl'>{data.title}
                                        </motion.h1>
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0, color: ["#ffffff", "red", "#33ff4f", "#f5cba7", "#3361ff"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}

                                            className='text-center text-primary font-bold text-xl md:text-4xl lg:text-6xl'>

                                            <Typewriter
                                                words={['Innovation', 'Novelty', 'Modernization', 'Improvement!']}
                                                loop={true}
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
                                            className='text-center my-2 md:mt-4 text-white-800 md:text-xl lg:text-2xl'>{data.sub_title}</motion.h1>
                                        <div className='flex gap-3 justify-center'>
                                            <Link to={"/assignments"} className="rounded px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-primary text-primary-content hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                                                <span className="relative text-sm md:text-base">{data.button1}</span>
                                            </Link>
                                            {
                                                userData ? <Link className="rounded flex items-center px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-primary text-primary-content hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                                                    <span className="relative text-sm md:text-base flex justify-center items-center gap-2">Registered</span>
                                                </Link> : <Link to={"/Signup"} className="rounded flex items-center px-2 md:px-3 lg:px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-primary text-primary-content hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                                    <span className="relative text-sm md:text-base flex justify-center items-center gap-2"><BiLogIn size={20} /> {data.button2}</span>
                                                </Link>
                                            }

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>)
                    }
                </Swiper>

            </div>
            <div className='max-w-[1250px] mx-auto'>
                <div data-aos="fade-up" className='max-w-[1000px] mx-auto mt-10'>
                    <div className='flex justify-center mb-4 md:mb-10 items-center gap-3'>
                        <Lottie style={{ width: "40px" }} animationData={question} loop={true}></Lottie>
                        <h1 className='text-center text-base-content text-xl md:text-3xl lg:text-4xl font-bold'>Frequently Asked <span className='text-primary'>Questions</span></h1>
                    </div>

                    <div className="join-vertical bg-base-100 shadow-xl rounded-2xl">

                        <div className="collapse collapse-arrow join-item">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base-content font-semibold">Q. What is StudySync?</div>
                            <div className="collapse-content text-sm bg-secondary">A. StudySync is an online group-study platform where students can collaborate, share study resources, and complete assignments together in a productive environment.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base-content font-semibold">Q. How can I join a study group?</div>
                            <div className="collapse-content text-sm bg-secondary">A. After signing up, you can browse available groups or create your own. You can also receive invites from other students to join their group.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base-content font-semibold">Q. Can I submit and manage assignments here?</div>
                            <div className="collapse-content text-sm bg-secondary">A. Yes! StudySync allows you to create, assign, submit, and track assignments within your study group.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base-content font-semibold">Q. Can I chat or video call with my group members?</div>
                            <div className="collapse-content text-sm bg-secondary">A. Yes. StudySync supports group messaging, file sharing, and integration with third-party video call tools for better communication.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-base-content font-semibold">Q. Is StudySync free to use?</div>
                            <div className="collapse-content text-sm bg-secondary">A. Absolutely. Most core features like joining groups, sharing resources, and submitting assignments are free for all users.</div>
                        </div>
                    </div>
                </div>
                <FeaturesSection></FeaturesSection>
            </div>
        </>
    );
};

export default Home;