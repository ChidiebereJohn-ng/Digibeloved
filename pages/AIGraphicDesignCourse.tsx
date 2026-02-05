import React, { useState } from 'react';
import {
    CheckCircle, ArrowRight, Smartphone, Monitor, Zap, Clock,
    Palette, Users, ShieldCheck, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIGraphicDesignCourse: React.FC = () => {
    const [activeImage, setActiveImage] = useState<1 | 2>(1);

    return (
        <div className="bg-white min-h-screen">

            {/* 1️⃣ Call Out Your Audience & 2️⃣ Headline */}
            <section className="bg-navy text-white pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-accent font-bold uppercase tracking-wider mb-4 animate-pulse">
                        Attention: Designers, Content Creators, Business Owners & Absolute Beginners
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        <span className="text-red-500">WARNING:</span> Graphic Designers Who Ignore AI Will Be Replaced.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Learn the AI Design System That Creates Stunning Ads & Visuals in Minutes using Firefly, GPT, Gemini & Nano Banana.
                    </p>

                    {/* Mobile Emphasis Badge */}
                    <div className="inline-flex items-center bg-white/10 border border-accent/20 rounded-full px-6 py-2 mb-8">
                        <Smartphone className="text-accent mr-3 h-6 w-6" />
                        <span className="text-sm md:text-base font-medium">100% Smartphone Compatible Course</span>
                    </div>

                    <a href="https://paystack.shop/pay/kfmsp8uzid" className="block w-full sm:w-auto bg-accent text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-accent/50 mx-auto">
                        YES! I WANT TO MASTER AI GRAPHIC DESIGN NOW
                    </a>
                </div>
            </section>

            {/* Hero Image / Comparison Section */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-navy mb-4">Can you tell the difference?</h3>
                        <p className="text-gray-600">Click to toggle between the Original and the AI Remake.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => setActiveImage(prev => prev === 1 ? 2 : 1)}>
                        <img
                            src={activeImage === 1
                                ? "https://res.cloudinary.com/dn2mgiges/image/upload/v1770297098/remake_arouxd.jpg"
                                : "https://res.cloudinary.com/dn2mgiges/image/upload/v1770297107/remade_1_swtodu.png"
                            }
                            alt="Design comparison"
                            className="w-full h-auto object-cover transition-opacity duration-500"
                        />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full font-bold backdrop-blur-sm">
                            {activeImage === 1 ? "Image 1 (Click to Flip)" : "Image 2 (Click to Flip)"}
                        </div>
                    </div>
                    <p className="text-center mt-6 text-xl font-semibold text-navy">
                        Between Image 1 & 2 which one is AI generated?
                        <span className="block text-accent text-sm mt-2 font-normal">(Hint: It doesn't matter. You'll learn to create both.)</span>
                    </p>
                </div>
            </section>

            {/* 4️⃣ Intrigue Bullets */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-navy/5 p-8 rounded-3xl border border-navy/10">
                        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Inside this training, you’ll discover:</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "The AI Design Method turning beginners into creative professionals",
                                "Why traditional design is slow — and how AI cuts design time by 80%",
                                "The secret prompt formula that produces stunning graphics every time",
                                "How to design ads and social media visuals without Photoshop",
                                "How to turn ideas into professional campaigns using AI",
                                "The creativity reverse-engineering technique used by modern designers"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle className="text-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Problem Agitation */}
            <section className="py-16 px-4 bg-red-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-red-900 mb-8">The Design World Has Changed...</h2>
                    <div className="grid md:grid-cols-2 gap-10 text-left">
                        <div>
                            <h3 className="font-bold text-navy text-xl mb-4">Right now, you need:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center"><div className="w-2 h-2 bg-navy rounded-full mr-2"></div>Social media content</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-navy rounded-full mr-2"></div>High-converting ads</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-navy rounded-full mr-2"></div>Professional branding</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-red-600 text-xl mb-4">But the reality is:</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>You don’t know design theory</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>Hiring designers is expensive</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>Canva feels limiting</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>AI gives you random ugly results</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-8 text-xl font-bold text-navy italic">
                        Those who don’t adapt will be left behind.
                    </p>
                </div>
            </section>

            {/* 6️⃣ The Solution */}
            <section className="py-20 px-4 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/ai_designer_workspace_topdown.png')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Introducing</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">AI Powered Graphic Design Training Program</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        A step-by-step learning system that transforms you from <span className="text-red-400 font-bold line-through">confused beginner</span> into <span className="text-green-400 font-bold">confident AI-powered creative professional</span>.
                    </p>
                </div>
            </section>

            {/* 7️⃣ Authority & Social Proof (NEWS) */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy mb-4">Make No Mistake: AI is the Standard.</h2>
                        <p className="text-gray-600">Major tech companies and design leaders agree.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase">Industry Report</span>
                            <h3 className="text-lg font-bold text-navy mt-2 mb-3">"Adobe Firefly is redefining creative workflows"</h3>
                            <p className="text-sm text-gray-600">Recent updates show Firefly boosting creative ideation by 70%, becoming an essential tool for modern agencies.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase">Tech News</span>
                            <h3 className="text-lg font-bold text-navy mt-2 mb-3">"Google Gemini transforms digital content"</h3>
                            <p className="text-sm text-gray-600">Gemini's multimodal capabilities now allow designers to generate complex UI and branding assets from simple prompts.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase">Future trends</span>
                            <h3 className="text-lg font-bold text-navy mt-2 mb-3">"Designers who use AI will dominate"</h3>
                            <p className="text-sm text-gray-600">The 2026 job market demands AI literacy. Manual execution is being replaced by strategic AI curation.</p>
                        </div>
                    </div>
                    <p className="text-center mt-8 font-bold text-navy text-lg border-b-2 border-accent inline-block mx-auto pb-1">
                        AI-powered creativity is no longer optional — it’s essential.
                    </p>
                </div>
            </section>

            {/* Phone Accessibility Section - New Custom Addition */}
            <section className="py-16 bg-gradient-to-r from-accent/10 to-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src="/mobile_ai_design_action.png" alt="Designing on smartphone" className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center px-4 py-2 bg-navy text-white rounded-full mb-6">
                            <Smartphone className="h-5 w-5 mr-2 text-accent" />
                            <span className="font-bold text-sm">NO LAPTOP? NO PROBLEM.</span>
                        </div>
                        <h2 className="text-4xl font-bold text-navy mb-6">Design Like a Pro. <br />Straight from Your Phone.</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            You don't need a $2,000 MacBook or an expensive studio. We teach you workflows that are fully optimized for mobile.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center font-medium text-navy"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Generate visuals on the go</li>
                            <li className="flex items-center font-medium text-navy"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Edit branding while commuting</li>
                            <li className="flex items-center font-medium text-navy"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Run your agency from your pocket</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Benefits */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy text-center mb-12">When you enroll, you will gain the ability to:</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Create Stunning Designs Effortlessly", desc: "Turn simple ideas into professional posters, flyers, and social media graphics without struggling with software." },
                            { title: "Think Like a Designer", desc: "Understand colors, typography, and layout so your AI designs look polished and professional." },
                            { title: "Control AI With Prompts", desc: "Command AI to generate exactly what you imagine instead of random outputs." },
                            { title: "Build Complete Campaigns", desc: "Create slogans, visuals, and marketing creatives for businesses and brands." },
                            { title: "Produce Infographics", desc: "Transform plain text into beautiful slides and visuals." },
                            { title: "Unlock New Income", desc: "Gain a modern digital skill that businesses are actively seeking right now." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="bg-green-100 p-2 rounded-lg h-fit">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy text-lg">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ Testimonials */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy text-center mb-12">Students are already designing smarter & faster.</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <img src="/student_testimonial_emmanuel.png" alt="Emmanuel" className="w-12 h-12 rounded-full object-cover mr-4" />
                                <div>
                                    <h4 className="font-bold text-navy">Emmanuel</h4>
                                    <div className="flex text-accent"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"This training helped me understand how to control AI for professional designs. I never thought I could do this."</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <img src="/student_testimonial_chidiogo.png" alt="Chidiogo" className="w-12 h-12 rounded-full object-cover mr-4" />
                                <div>
                                    <h4 className="font-bold text-navy">Chidiogo</h4>
                                    <div className="flex text-accent"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"My social media graphics look 10x better now. It's like I hired a senior designer, but it's just me and my phone."</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <img src="/student_testimonial_paul.png" alt="Paul" className="w-12 h-12 rounded-full object-cover mr-4" />
                                <div>
                                    <h4 className="font-bold text-navy">Paul</h4>
                                    <div className="flex text-accent"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"I never studied design, but now I can create ads easily. This course is a game changer for my business."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 Godfather Offer & 1️⃣1️⃣ Bonuses */}
            <section className="py-20 px-4 bg-navy text-white">
                <div className="max-w-4xl mx-auto border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-accent text-navy font-bold px-6 py-2 rounded-bl-2xl">
                        LIMITED TIME OFFER
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">🎓 AI Powered Graphic Design Masterclass</h2>
                    <p className="text-center text-gray-300 mb-10 text-lg">Firefly, GPT, Gemini & Nano Banana</p>

                    <div className="bg-white/5 p-8 rounded-2xl mb-10">
                        <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-wider">What You Get Today:</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span>Full AI Design Training Program</span>
                                <span className="font-mono text-gray-400 line-through">₦80,000</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span>Prompt Engineering System</span>
                                <span className="font-mono text-gray-400 line-through">₦25,000</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span><span className="text-accent font-bold">BONUS:</span> Prompt Packs</span>
                                <span className="font-mono text-gray-400 line-through">₦30,000</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span><span className="text-accent font-bold">BONUS:</span> Workflow Templates</span>
                                <span className="font-mono text-gray-400 line-through">₦20,000</span>
                            </li>
                            <li className="flex justify-between items-center pt-4 text-xl md:text-2xl font-bold">
                                <span>Total Value</span>
                                <span className="text-white">₦155,000</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400 mb-2 uppercase tracking-widest text-sm">Today's Exclusive Price</p>
                        <div className="text-6xl font-extrabold text-accent mb-4">₦12,999</div>
                        <p className="text-gray-400 mb-8">(or $20 USD)</p>

                        <a href="https://paystack.shop/pay/kfmsp8uzid" className="inline-block w-full md:w-2/3 bg-green-500 hover:bg-green-400 text-white text-xl font-bold py-5 rounded-xl shadow-lg transition-transform hover:scale-105 mb-4">
                            GET INSTANT ACCESS NOW
                        </a>

                        <p className="text-sm text-red-300 font-bold flex items-center justify-center">
                            <Clock className="h-4 w-4 mr-2" /> Price increases soon. Enrollment is limited.
                        </p>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ Guarantee */}
            <section className="py-12 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <ShieldCheck className="h-16 w-16 text-navy mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy mb-2">7-Day Money-Back Guarantee</h3>
                    <p className="text-gray-600">
                        If this training doesn’t help you create at least one professional design within 7 days, you get a full refund. No risk. No pressure.
                    </p>
                </div>
            </section>

            {/* 1️⃣7️⃣ P.S. Warning */}
            <footer className="bg-slate-900 text-white py-16 px-4">
                <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-12">
                    <h4 className="font-bold text-accent text-xl mb-4">P.S. Warning & Reminder</h4>
                    <p className="text-gray-300 mb-6 font-light leading-relaxed">
                        Every industry is adopting AI. If you don’t learn this skill now, you risk falling behind in creativity, business, and career growth.
                        For only ₦12,999, you can future-proof your career today.
                    </p>
                    <a href="https://paystack.shop/pay/kfmsp8uzid" className="inline-flex items-center text-accent hover:text-white font-bold text-lg transition-colors">
                        Enrol Now – Start Today <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default AIGraphicDesignCourse;
