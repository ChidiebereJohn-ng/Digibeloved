import React, { useState } from 'react';
import {
    ArrowLeft, Brain, Layers, Terminal, Globe, Code, Shield,
    ChevronRight, Lightbulb, Zap, Rocket, Layout, Monitor, MousePointer
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Data for the skills to make the UI dynamic
type SkillSection = {
    id: string;
    icon: React.ElementType;
    title: string;
    level?: string;
    content: React.ReactNode;
};

const AISkillStackPost: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderOverview = () => (
        <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-navy to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                        🔑 7 AI Skills You Need in 2026
                    </h1>
                    <p className="text-2xl text-accent font-bold mb-6">
                        Learn these or get replaced.
                    </p>
                    <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                        Most people treat AI skills like a buffet. A little prompting here. A tool demo there. No system. No progression.
                        That's why they plateau. Discover the systematic skill stack to move from tourist to native.
                    </p>

                    <button
                        onClick={() => setActiveTab('skill-1')}
                        className="mt-8 bg-accent text-navy px-8 py-4 rounded-xl font-bold flex items-center hover:bg-white transition-all shadow-lg hover:shadow-accent/20"
                    >
                        Start the Stack <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                {/* Abstract Background Decoration */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <Brain size={400} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                        <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">Clear Progression</h3>
                    <p className="text-gray-500 text-sm">Move systematically from beginner foundations to advanced architecture.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                        <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">Compounding Gains</h3>
                    <p className="text-gray-500 text-sm">Each skill amplifies the next, creating exponential productivity boosts.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                        <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">Competitive Moat</h3>
                    <p className="text-gray-500 text-sm">Build real capabilities that can't be copied overnight by amateurs.</p>
                </div>
            </div>
        </div>
    );

    const skills: SkillSection[] = [
        {
            id: 'skill-1',
            icon: Brain,
            title: 'Prompting',
            level: 'Foundation Level',
            content: (
                <div className="space-y-6 animate-fadeIn">
                    <p className="text-lg text-gray-600 border-l-4 border-accent pl-4 italic">
                        "Prompting is to AI what steering is to driving. Without it, you're just a passenger."
                    </p>

                    <h3 className="font-bold text-navy text-xl flex items-center mt-8">
                        <Lightbulb className="mr-2 h-5 w-5 text-accent" /> Use These Frameworks
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-2xl hover:border-accent/50 transition-colors group">
                            <h4 className="font-bold text-navy text-lg mb-4 flex justify-between">
                                Framework 1: TCREI
                                <span className="text-xs bg-navy text-white px-2 py-1 rounded">Task-Focused</span>
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">T</span> <span>Task: What specific action?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">C</span> <span>Context: What background is needed?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">R</span> <span>References: Examples of good output.</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">E</span> <span>Evaluate: How to judge criteria?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">I</span> <span>Iterate: Refine based on results.</span></li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-2xl hover:border-accent/50 transition-colors">
                            <h4 className="font-bold text-navy text-lg mb-4 flex justify-between">
                                Framework 2: RASTI
                                <span className="text-xs bg-navy text-white px-2 py-1 rounded">Persona-Focused</span>
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">R</span> <span>Role: Who should the AI be?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">A</span> <span>Audience: Who is this for?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">S</span> <span>Steps: Break down the process.</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">T</span> <span>Tone: How should it sound?</span></li>
                                <li className="flex gap-3"><span className="font-bold text-accent min-w-[1.5rem]">I</span> <span>Intent: What's the goal?</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'skill-2',
            icon: Layers,
            title: 'Tool Mastery',
            level: 'Essentials',
            content: (
                <div className="space-y-6 animate-fadeIn">
                    <p className="text-gray-600">
                        Good news: You don't need 50 AI tools. You need 4 capabilities. Most modern chatbots now handle all four. Pick one. Master it.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'General AI Chatbot', tools: 'ChatGPT, Claude, Gemini', desc: 'Answer questions, rewrite, analyze.' },
                            { title: 'Research Tool', tools: 'Perplexity, Gemini Deep Research', desc: 'News, deep reports, citations.' },
                            { title: 'Learning Accelerator', tools: 'NotebookLM, Custom GPTs', desc: 'Turn complex topics into simpler terms.' },
                            { title: 'Builder Tool', tools: 'Claude Artifacts, Canvas, Cursor', desc: 'Create slides, dashboards, apps.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-default">
                                <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                                <p className="text-xs text-accent font-semibold mb-2">{item.tools}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'skill-3',
            icon: Terminal,
            title: 'Custom Agents',
            level: 'Intermediate',
            content: (
                <div className="space-y-6 animate-fadeIn">
                    <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                        <h3 className="font-bold text-purple-900 text-lg mb-2">Why Agents Matter</h3>
                        <p className="text-purple-800">
                            AI agents are software systems that pursue goals on your behalf. They don't just answer; they <strong>act</strong>.
                            The real money is in building custom solutions that integrate into existing systems.
                        </p>
                    </div>

                    <h4 className="font-bold text-navy text-lg mt-8 mb-4">Real World Examples</h4>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-xs border border-gray-100 text-purple-600 min-w-[80px] text-center">
                                Retention Agent
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">When customers try to unsubscribe, it crafts personalized emails addressing their specific reason. Not generic.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-xs border border-gray-100 text-purple-600 min-w-[80px] text-center">
                                Reporting Agent
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Automatically generates investor reports by pulling from multiple databases. Cuts reporting time from days to hours.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tools to Learn</span>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {['n8n', 'Make', 'LangChain', 'CrewAI', 'AutoGen', 'Flowise'].map(tool => (
                                <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'skill-4',
            icon: Globe,
            title: 'Open-Source AI',
            level: 'Hidden Revolution',
            content: (
                <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">The Trend</span>
                        <span className="font-medium text-gray-600">China is winning the open-source race with DeepSeek.</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1 border border-green-100 bg-green-50/50 p-5 rounded-xl">
                            <h4 className="font-bold text-green-800 mb-2">Why It Matters</h4>
                            <ul className="space-y-2 text-sm text-green-900">
                                <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Cost: Dramatically cheaper</li>
                                <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Control: Run privately/locally</li>
                                <li className="flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> No Vendor Lock-in</li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1 border border-gray-100 bg-white p-5 rounded-xl">
                            <h4 className="font-bold text-navy mb-2">Top Models</h4>
                            <div className="flex flex-wrap gap-2">
                                {['DeepSeek', 'Qwen', 'LLaMA', 'Mistral', 'Phi'].map(m => (
                                    <span key={m} className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs border">{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'skill-5',
            icon: Code,
            title: 'Vibe Coding',
            level: 'Advanced',
            content: (
                <div className="space-y-8 animate-fadeIn">
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-2">Vibe coding = AI-assisted product building.</h3>
                        <p className="text-gray-600 text-lg">
                            You describe what you want. The AI builds it.
                        </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                        <p className="text-orange-900 font-medium leading-relaxed">
                            A year ago, building a web app required months of coding. Now you can build functional products in hours with zero coding experience.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-6">The Spectrum of Tools</h4>

                        <div className="space-y-4">
                            {/* No Code */}
                            <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <div className="p-3 bg-green-50 rounded-lg mr-4 text-green-600">
                                    <Layout className="h-5 w-5" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-navy">No-code</span>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Beginners</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Lovable, Bolt, v0</p>
                                </div>
                            </div>

                            {/* Low Code */}
                            <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <div className="p-3 bg-blue-50 rounded-lg mr-4 text-blue-600">
                                    <MousePointer className="h-5 w-5" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-navy">Low-code</span>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Some Experience</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Replit Agent, Windsurf</p>
                                </div>
                            </div>

                            {/* Pro Code */}
                            <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <div className="p-3 bg-purple-50 rounded-lg mr-4 text-purple-600">
                                    <Monitor className="h-5 w-5" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-navy">Pro-code</span>
                                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Developers</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Cursor, GitHub Copilot, Cline</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="font-bold text-navy mb-2">Why it matters</h4>
                        <p className="text-gray-600 text-sm">Product building is no longer gated by technical skills. The ability to rapidly prototype gives you speed advantages competitors can't match.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'skill-6-7',
            icon: Shield,
            title: 'Emerging Trends',
            level: 'Future Watch',
            content: (
                <div className="space-y-8 animate-fadeIn">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100">
                            <h3 className="font-bold text-red-900 text-xl mb-3">Multimodality</h3>
                            <div className="flex gap-2 mb-4">
                                {['Images', 'Video', 'Audio'].map(t => (
                                    <span key={t} className="bg-white/60 px-2 py-1 rounded text-xs font-medium text-red-800">{t}</span>
                                ))}
                            </div>
                            <p className="text-red-800/80 text-sm leading-relaxed">
                                AI-generated audio is already indistinguishable from human voices.
                                Images and video are catching up fast. <br /><br />
                                <strong>Google's Nano Banana</strong> model solved the character consistency problem. Same character across multiple frames. This was impossible 6 months ago.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-800 text-xl mb-3">AI Safety</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Not sexy. Not trendy. But critical. As tools become more powerful, understanding their risks becomes essential for advising businesses.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-20 pb-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation Breadcrumb */}
                <div className="mb-6 flex items-center justify-between">
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-navy transition-colors text-sm font-medium">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Insights
                    </Link>
                    <span className="text-xs font-mono text-gray-400">READING TIME: 6 MIN</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Sidebar Navigation - Dynamic View Style */}
                    <div className="lg:col-span-3 lg:sticky lg:top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-4 bg-navy text-white">
                            <h2 className="font-bold text-sm tracking-widest uppercase opacity-80">Skill Stack</h2>
                        </div>
                        <nav className="p-2 space-y-1">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`w-full flex items-center p-3 rounded-lg transition-all ${activeTab === 'overview'
                                        ? 'bg-accent/10 text-navy font-bold shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Layout className="h-5 w-5 mr-3" />
                                <span className="text-sm">Overview</span>
                            </button>

                            <div className="h-px bg-gray-100 my-2 mx-3"></div>

                            {skills.map((skill) => (
                                <button
                                    key={skill.id}
                                    onClick={() => setActiveTab(skill.id)}
                                    className={`w-full flex items-center p-3 rounded-lg transition-all ${activeTab === skill.id
                                            ? 'bg-accent/10 text-navy font-bold shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <skill.icon className={`h-5 w-5 mr-3 ${activeTab === skill.id ? 'text-accent' : 'text-gray-400'}`} />
                                    <div className="text-left">
                                        <span className="block text-sm leading-none">{skill.title}</span>
                                    </div>
                                </button>
                            ))}

                            <div className="h-px bg-gray-100 my-2 mx-3"></div>

                            <button
                                onClick={() => setActiveTab('auditor')}
                                className={`w-full flex items-center p-3 rounded-lg transition-all ${activeTab === 'auditor'
                                        ? 'bg-navy text-white shadow-md'
                                        : 'text-navy hover:bg-gray-50 font-medium'
                                    }`}
                            >
                                <Zap className="h-5 w-5 mr-3" />
                                <span className="text-sm">Skill Auditor</span>
                            </button>

                        </nav>
                    </div>

                    {/* Main Content Area - Card Style */}
                    <div className="lg:col-span-9">
                        {activeTab === 'overview' && renderOverview()}

                        {activeTab === 'auditor' && (
                            <div className="bg-navy rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden animate-fadeIn">
                                <div className="relative z-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 flex items-center">
                                        <Zap className="mr-3 h-8 w-8" /> Implementation Prompt
                                    </h2>
                                    <p className="mb-8 text-gray-300 text-lg">
                                        Don't just read. Act. Use this prompt to assess your current AI skill level and create a personalized 90-day learning plan.
                                    </p>

                                    <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 font-mono text-sm text-gray-200 shadow-inner">
                                        <p className="whitespace-pre-wrap leading-relaxed">
                                            <span className="text-accent font-bold">PROMPT:</span><br /><br />
                                            You are an AI Skills Assessment Specialist. Your task: <br />
                                            1. Assess my current AI skill level across 7 domains.<br />
                                            2. Ask me diagnostic questions (max 3 per domain).<br />
                                            3. Rate each skill 1-5.<br />
                                            4. Create a 90-day learning plan prioritizing skills with highest ROI.<br /><br />
                                            Start by asking about my current role and what I primarily use AI for today.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {skills.map(skill => activeTab === skill.id && (
                            <div key={skill.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 min-h-[600px] animate-fadeIn">
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-center">
                                        <div className="p-3 bg-navy/5 rounded-2xl mr-4">
                                            <skill.icon className="h-8 w-8 text-navy" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-navy">{skill.title}</h2>
                                            <span className="text-xs font-bold tracking-wider text-accent uppercase">{skill.level}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none text-navy">
                                    {skill.content}
                                </div>

                                <div className="mt-12 flex justify-between">
                                    {/* Logic to show Prev/Next buttons could go here for better UX */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AISkillStackPost;
