import React from 'react';
import { ArrowLeft, CheckCircle, Brain, Terminal, Layers, Globe, Code, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AISkillStackPost: React.FC = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative bg-navy text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="relative max-w-3xl mx-auto text-center">
                    <Link to="/blog" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Insights
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                        THE 2026 AI SKILL STACK
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop treating AI like a buffet. Build a systematic progression from beginner to native with this compounded skill stack.
                    </p>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p className="lead text-xl font-medium text-navy mb-6">
                        Most people treat AI skills like a buffet. A little prompting here. A tool demo there. No system. No progression.
                    </p>
                    <p className="mb-6">
                        That's why they plateau. They never move from tourist to native. This skill stack creates a clear progression from beginner to advanced, offering compounded advantages where each skill amplifies the next.
                    </p>
                </div>

                {/* Skill 1 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-accent/10 p-3 rounded-lg mr-4">
                            <Brain className="h-8 w-8 text-navy" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILL #1: PROMPTING (Foundation Level)</h2>
                    </div>
                    <div className="pl-4 border-l-4 border-accent space-y-4">
                        <p className="text-gray-600">
                            Prompting is to AI what steering is to driving. Without it, you're just a passenger. Two frameworks we recommend:
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl my-6">
                            <h3 className="font-bold text-navy text-lg mb-3">Framework 1: TCREI (Tiny Crabs Write Enormous Iguanas)</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>T - Task:</strong> What specific action do you want?</li>
                                <li><strong>C - Context:</strong> Background information the AI needs</li>
                                <li><strong>R - References:</strong> Examples of what good output looks like</li>
                                <li><strong>E - Evaluate:</strong> How will you judge the output?</li>
                                <li><strong>I - Iterate:</strong> Refine based on results</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl my-6">
                            <h3 className="font-bold text-navy text-lg mb-3">Framework 2: RASTI (Ramen Saves Tragic Idiots)</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>R - Role:</strong> Who should the AI be?</li>
                                <li><strong>A - Audience:</strong> Who is this for?</li>
                                <li><strong>S - Steps:</strong> Break down the process</li>
                                <li><strong>T - Tone:</strong> How should it sound?</li>
                                <li><strong>I - Intent:</strong> What's the underlying goal?</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Layers className="h-8 w-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILL #2: ESSENTIAL TOOL MASTERY</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Good news: You don't need 50 AI tools. You need 4 capabilities. Most modern chatbots now handle all four. Pick one. Master it. Stop tool-hopping.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <h4 className="font-bold text-navy">General AI Chatbot</h4>
                            <p className="text-sm text-gray-500">ChatGPT, Claude, Gemini</p>
                        </div>
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <h4 className="font-bold text-navy">Research Tool</h4>
                            <p className="text-sm text-gray-500">Perplexity, Gemini Deep Research</p>
                        </div>
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <h4 className="font-bold text-navy">Learning Accelerator</h4>
                            <p className="text-sm text-gray-500">NotebookLM, custom GPTs</p>
                        </div>
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <h4 className="font-bold text-navy">Builder Tool</h4>
                            <p className="text-sm text-gray-500">Claude Artifacts, Canvas, Cursor</p>
                        </div>
                    </div>
                </div>

                {/* Skill 3 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                            <Terminal className="h-8 w-8 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILL #3: BUILDING CUSTOM AI AGENTS (Intermediate)</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                        <p>AI agents are software systems that pursue goals on your behalf. They don't just answer; they act.</p>
                        <p><strong>Why for business?</strong> The real money is in building custom AI solutions that integrate into existing systems, not just swapping tools.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Retention Agent:</strong> Crafts personalized emails addressing specific complaints.</li>
                            <li><strong>Reporting Agent:</strong> Pulls from multiple databases to generate investor reports in hours, not days.</li>
                        </ul>
                        <p className="text-sm font-semibold text-purple-600 mt-2">Tools to learn: n8n, Make, LangChain, CrewAI, AutoGen, Flowise</p>
                    </div>
                </div>

                {/* Skill 4 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <Globe className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILL #4: OPEN-SOURCE AI</h2>
                    </div>
                    <div className="text-gray-600 space-y-4">
                        <p>China is winning the open-source AI race. DeepSeek changed everything, performing as well as closed giants like GPT-4.</p>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> <strong>Cost:</strong> Dramatically cheaper at scale.</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> <strong>Control:</strong> Run it anywhere (on-premise, edge).</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> <strong>No Vendor Lock-in:</strong> Switch providers easily.</li>
                        </ul>
                        <p className="bg-green-50 p-3 rounded-md inline-block text-sm font-medium">Models to explore: DeepSeek, Qwen, LLaMA, Mistral, Phi</p>
                    </div>
                </div>

                {/* Skill 5 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                            <Code className="h-8 w-8 text-orange-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILL #5: VIBE CODING (Advanced)</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Vibe coding = AI-assisted product building. You describe what you want. The AI builds it. Product building is no longer gated by technical skills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="block font-bold text-navy">No-code</span>
                            <span className="text-sm text-gray-500">Lovable, Bolt, v0</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="block font-bold text-navy">Low-code</span>
                            <span className="text-sm text-gray-500">Replit Agent, Windsurf</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="block font-bold text-navy">Pro-code</span>
                            <span className="text-sm text-gray-500">Cursor, GitHub Copilot</span>
                        </div>
                    </div>
                </div>

                {/* Skills 6-7 */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="bg-red-100 p-3 rounded-lg mr-4">
                            <Shield className="h-8 w-8 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy">SKILLS #6-7: EMERGING TRENDS</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-xl text-navy mb-2">Multimodality</h3>
                            <p className="text-gray-600">
                                Images, Video, Audio. AI-generated audio is indistinguishable from human voices. Character consistency (like Google's Nano Banana) is solved.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-navy mb-2">AI Safety</h3>
                            <p className="text-gray-600">
                                Not sexy, but critical. As tools become powerful, understanding risks is essential for advising businesses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action / Prompt Box */}
                <div className="bg-navy rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-accent mb-4">⚙️ IMPLEMENTATION PROMPT: THE SKILL AUDITOR</h2>
                        <p className="mb-6 text-gray-300">
                            Use this prompt to assess your current AI skill level and create a personalized 90-day learning plan.
                        </p>
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 font-mono text-sm overflow-x-auto text-gray-200">
                            <p className="whitespace-pre-wrap">
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

            </article>

        </div>
    );
};

export default AISkillStackPost;
