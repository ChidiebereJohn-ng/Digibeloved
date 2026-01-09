import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Luxury Real Estate",
        img: "https://res.cloudinary.com/dn2mgiges/image/upload/v1767875545/stitch_luxury_real_estate_listing_k9p1fo.png"
    },
    {
        id: 2,
        title: "Fintech SaaS",
        img: "https://res.cloudinary.com/dn2mgiges/image/upload/v1767875730/Fintech_xesbik.png"
    },
    {
        id: 3,
        title: "Artisan Coffee",
        img: "https://res.cloudinary.com/dn2mgiges/image/upload/v1767875544/Artisan_Coffee_gn57jn.png"
    },
    {
        id: 4,
        title: "Medical/Telehealth",
        img: "https://res.cloudinary.com/dn2mgiges/image/upload/v1767875730/Clinic_r9td88.png"
    }
];

const PortfolioGrid: React.FC = () => {
    const [activeCardId, setActiveCardId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setActiveCardId(activeCardId === id ? null : id);
    };

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Recent Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Explore our high-fidelity designs. <span className="text-navy font-semibold">Click on any card</span> to view the full scrollable design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const isActive = activeCardId === project.id;
                        const imageUrl = `${project.img}?q_auto:best,f_auto`;

                        return (
                            <div
                                key={project.id}
                                onClick={() => handleCardClick(project.id)}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer bg-white shadow-xl ring-1 ring-black/5 group select-none`}
                                style={{ height: '500px', borderRadius: '16px' }}
                            >
                                {/* Image Container */}
                                <div className="w-full relative">
                                    <img
                                        src={imageUrl}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full object-cover align-top"
                                        style={{
                                            transitionDuration: '4000ms',
                                            transitionTimingFunction: 'ease-in-out',
                                            transform: isActive ? 'translateY(calc(-100% + 500px))' : 'translateY(0)',
                                            height: 'auto',
                                            minHeight: '100%',
                                            display: 'block'
                                        }}
                                    />
                                </div>

                                {/* Click to Scroll Button Overlay */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-navy/20 backdrop-blur-[2px] transition-all duration-300 z-10 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                >
                                    <div className="bg-white text-navy px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 transform transition-transform group-hover:scale-105 border border-white/20">
                                        <MousePointer2 className="w-5 h-5 text-accent" />
                                        <span>Click to Scroll</span>
                                    </div>
                                </div>

                                {/* Project Title Badge (Optional but helps identify active projects) */}
                                <div className={`absolute bottom-6 left-6 right-6 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                    <div className="bg-navy/90 backdrop-blur text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block shadow-lg border border-white/10">
                                        {project.title}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
