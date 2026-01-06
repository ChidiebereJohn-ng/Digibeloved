import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { CheckCircle, Clock, BookOpen, AlertTriangle, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';

const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const course = courses.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-navy mb-4">Course Not Found</h2>
                    <Link to="/services/training" className="text-accent underline hover:text-navy">Back to Training Hub</Link>
                </div>
            </div>
        );
    }

    // Schema for Course Product
    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.shortDescription,
        "provider": {
            "@type": "Organization",
            "name": "DigiBeloved",
            "sameAs": "https://digibeloved.com"
        }
    };

    // WhatsApp Redirect Handler
    const handleEnrollClick = () => {
        const message = `Hello, I want to enroll in the "${course.title}" course for ${course.price}. Please provide payment details.`;
        const whatsappUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <SchemaScript schema={schema} />
            <div className="bg-slate-50 min-h-screen pt-20">

                {/* Sales Letter Header */}
                <header className="bg-navy text-white text-center py-16 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm mb-6 animate-pulse">
                            ATTENTION: {course.copy.audience.join(", ")}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
                            {course.copy.headline}
                        </h1>
                        <p className="text-xl md:text-2xl text-accent font-medium max-w-3xl mx-auto">
                            {course.copy.subheadline}
                        </p>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-4 py-12">

                    {/* Pain Points (Agitation) */}
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-red-100 mb-12">
                        <h3 className="text-2xl font-bold text-navy mb-6">Does this sound like you?</h3>
                        <ul className="space-y-4">
                            {course.copy.painPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-gray-700 italic">
                            "If you said YES, I have good news. It is NOT YOUR FAULT. School did not teach you how to use the new tools... But today, you can use a 'Loophole' to finish your work fast."
                        </div>
                    </div>

                    {/* Solution & Curriculum */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-navy mb-4">INTRODUCING: THE SOLUTION</h2>
                            <p className="text-xl text-gray-600">{course.copy.solution}</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-navy p-6 flex justify-between items-center text-white">
                                <span className="font-bold text-lg">Course Curriculum</span>
                                <span className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full"><Clock className="w-4 h-4 mr-2" /> {course.duration}</span>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {course.curriculum.map((module, i) => (
                                    <div key={i} className="p-6 hover:bg-slate-50 transition-colors">
                                        <h4 className="font-bold text-lg text-navy mb-3 flex items-center">
                                            <BookOpen className="w-5 h-5 text-accent mr-3" />
                                            {module.title}
                                        </h4>
                                        <div className="pl-8 grid md:grid-cols-2 gap-2">
                                            {module.items.map((item, j) => (
                                                <div key={j} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download Curriculum CTA */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 text-sm mb-2">Want to see the full details offline?</p>
                            <button
                                onClick={() => alert("Curriculum download started...")} // Placeholder
                                className="inline-flex items-center text-navy font-bold hover:text-accent transition-colors"
                            >
                                <Download className="w-4 h-4 mr-2" /> Download Full Curriculum PDF
                            </button>
                        </div>
                    </div>

                    {/* Pricing & Offer */}
                    <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-navy font-bold px-6 py-2 rounded-bl-xl z-20">
                            Limited Time Offer
                        </div>

                        <h3 className="text-3xl font-bold mb-8">HERE IS MY "CRAZY" OFFER FOR YOU</h3>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-10">
                            <div>
                                <ul className="space-y-4">
                                    {course.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-200">
                                            <CheckCircle className="h-5 w-5 text-accent mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-l border-white/10 pl-8 flex flex-col justify-center">
                                <div className="text-gray-400 line-through text-lg">Total Value: {course.originalPrice}+</div>
                                <div className="text-5xl font-bold text-white mb-2">{course.price}</div>
                                <div className="text-green-400 text-sm font-bold">Only for Today</div>
                            </div>
                        </div>

                        <button
                            onClick={handleEnrollClick}
                            className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105 mb-6 animate-bounce"
                        >
                            YES! I WANT TO FINISH MY WORK FAST &gt;&gt;&gt;
                        </button>
                        <p className="text-sm text-gray-400 max-w-lg mx-auto">
                            WARNING: If you close this page, you will go back to the "Old Way." You will stay up late reading boring papers. Do not let that happen.
                        </p>
                    </div>

                    {/* Guarantee */}
                    <div className="mt-12 text-center max-w-2xl mx-auto">
                        <div className="flex justify-center mb-4">
                            <ShieldCheck className="h-12 w-12 text-navy" />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-2">My "Better Than Money Back" Guarantee</h4>
                        <p className="text-gray-600 italic">"{course.copy.guarantee}"</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CourseDetail;
