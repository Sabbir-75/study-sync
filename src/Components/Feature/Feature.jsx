import { use } from "react";
const respon = fetch("/feture.json").then(res => res.json())

const FeaturesSection = () => {
    const features = use(respon)
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h1 className='text-center mb-4 md:mb-10 text-xl md:text-3xl lg:text-4xl font-bold'>Awesome Features <span className='text-neutral'>of StudySync</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({ id, thumbnail, title, description }) => (
                    <div
                        key={id}
                        className="bg-base-100 duration-500 flex flex-col justify-between group relative text-base-content border border-base-300 rounded-2xl shadow-lg p-3 hover:shadow-xl transition-shadow text-center"
                    >
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full mx-auto mb-4 object-contain opacity-100 transition-opacity group-hover:opacity-50"
                        />
                        <h3 className="text-xl text-start font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 text-start">{description}</p>

                        <div className="hidden absolute group-hover:block py-2 transform opacity-0 group-hover:top-[50%] group-hover:left-[33%] group-hover:opacity-100">
                            <button className="text-sm btn btn-neutral text-neutral-content">
                                View More
                            </button>
                        </div>


                    </div>
                ))}
            </div>

        </section>
    );
}

export default FeaturesSection
