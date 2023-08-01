import { useState } from "react";

const OurProjects = () => {

    const projectCategories = ['all', 'web', 'app', 'logo', 'branding'];

    const all = [
        '/web-1.jpg',
        '/web-2.jpg',
        '/web-3.jpg',
        '/web-4.jpg',
        '/web-5.jpg',
        '/web-6.jpg',
        '/web-7.jpg',
        '/web-8.jpg',
        '/web-9.jpg',
        '/web-10.jpg',
        '/app-1.jpg',
        '/app-2.jpg',
        '/app-3.jpg',
        '/app-4.jpg',
        '/app-5.jpg',
        '/app-6.jpg',
        '/app-7.jpg',
        '/app-8.jpg',
        '/logo-1.webp',
        '/logo-2.jpg',
        '/logo-3.webp',
        '/logo-4.webp',
        '/logo-5.webp',
        '/logo-6.jpg',
        '/logo-7.webp',
        '/logo-8.webp',
        '/logo-9.webp',
        '/logo-10.jpg',
        '/branding-1.webp',
        '/branding-2.jpg',
        '/branding-3.webp',
        '/branding-4.webp',
        '/branding-5.webp',
        '/branding-6.jpg',
        '/branding-7.webp',
    ];

    const webs = [
        '/web-1.jpg',
        '/web-2.jpg',
        '/web-3.jpg',
        '/web-4.jpg',
        '/web-5.jpg',
        '/web-6.jpg',
        '/web-7.jpg',
        '/web-8.jpg',
        '/web-9.jpg',
        '/web-10.jpg',
    ];

    const apps = [
        '/app-1.jpg',
        '/app-2.jpg',
        '/app-3.jpg',
        '/app-4.jpg',
        '/app-5.jpg',
        '/app-6.jpg',
        '/app-7.jpg',
        '/app-8.jpg',
    ];

    const logos = [
        '/logo-1.webp',
        '/logo-2.jpg',
        '/logo-3.webp',
        '/logo-4.webp',
        '/logo-5.webp',
        '/logo-6.jpg',
        '/logo-7.webp',
        '/logo-8.webp',
        '/logo-9.webp',
        '/logo-10.jpg',
    ];

    const brandings = [
        '/branding-1.webp',
        '/branding-2.jpg',
        '/branding-3.webp',
        '/branding-4.webp',
        '/branding-5.webp',
        '/branding-6.jpg',
        '/branding-7.webp',
    ];
    
    const [currentCategory, setCurrentCategory] = useState(projectCategories[0]);
  return (
    <section
      id="home"
      className="
            flex
            flex-col
            gap-14
            py-16
            px-6
            md:px-0
        "
    >
        <div
            className="
                w-full
                flex
                flex-wrap
                gap-6
                justify-between
                items-center
            "
        >
            <div
                className="
                    text-4xl
                    font-semibold
                    uppercase
                    text-white
                "
            >
                Our Project
            </div>
            <div
                className="
                    flex
                    items-center
                    flex-wrap
                    gap-4
                "
            >
                {projectCategories.map((category) => (
                    <div
                        className={`
                            py-3
                            px-7
                            text-xl
                            uppercase
                            border-2 
                            border-blue-500
                            cursor-pointer
                            rounded-full
                            transition-all
                            duration-300
                            hover:tracking-widest
                            ${category === currentCategory ? 'text-black bg-white' : 'text-white bg-blue-500 hover:bg-primary-1'}
                        `}
                        key={category}
                        onClick={() => setCurrentCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
        <div
                className="
                    flex
                    justify-center
                    items-center
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >
                    {currentCategory === 'all' && (
                        all.map((currentImage) => (
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={currentImage}
                                className="
                                    rounded-2xl
                                    object-cover
                                    w-full
                                    h-72
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        ))
                    )}
                    {currentCategory === 'web' && (
                        webs.map((currentImage) => (
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={currentImage}
                                className="
                                    rounded-2xl
                                    object-cover
                                    w-full
                                    h-72
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        ))
                    )}
                    {currentCategory === 'app' && (
                        apps.map((currentImage) => (
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={currentImage}
                                className="
                                    rounded-2xl
                                    object-cover
                                    w-full
                                    h-72
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        ))
                    )}
                    {currentCategory === 'logo' && (
                        logos.map((currentImage) => (
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={currentImage}
                                className="
                                    rounded-2xl
                                    object-cover
                                    w-full
                                    h-72
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        ))
                    )}
                    {currentCategory === 'branding' && (
                        brandings.map((currentImage) => (
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={currentImage}
                                className="
                                    rounded-2xl
                                    object-cover
                                    w-full
                                    h-72
                                    transition-all
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        ))
                    )}
                </div>
            </div>
    </section>
  )
}

export default OurProjects