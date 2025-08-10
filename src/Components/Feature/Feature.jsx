import { use } from "react";
import { useNavigate } from "react-router";
const respon = fetch("/feture.json").then(res => res.json())

const FeaturesSection = () => {
    const navigate = useNavigate()
    const features = use(respon)
    return (
        <section data-aos="fade-up" className="max-w-6xl mx-auto px-4 py-12">
            <h1 className='text-center mb-4 md:mb-10 text-base-content text-xl md:text-3xl lg:text-4xl font-bold'>Awesome Features <span className='text-primary'>of StudySync</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({ id, thumbnail, title, description }) => (
                    <div
                        key={id}
                        className="bg-base-100 duration-500 flex flex-col justify-between group relative text-base-content border border-base-300 rounded-2xl shadow-lg p-3 hover:shadow-xl transition-shadow text-center"
                    >
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full mx-auto mb-4 object-contain opacity-100 transition-opacity group-hover:opacity-80"
                        />
                        <h3 className="text-xl text-start font-semibold mb-2">{title}</h3>
                        <p className="text-secondary text-start">{description}</p>
                        <div className="mt-4">
                            <button onClick={() => navigate(`/feture/${id}`)} className={`relative inline-flex items-center cursor-pointer justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group`}>
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                                <span className={`relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-content flex justify-center items-center gap-2`}>See More</span>
                                <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
                            </button>
                        </div>


                    </div>
                ))}
            </div>

        </section>
    );
}

export default FeaturesSection
