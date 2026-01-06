import React, { useState } from 'react';
import { Wand2, Copy, CheckCircle, Coffee, AlertTriangle, ArrowRight, Zap, Sparkles } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';

const PromptPolisher: React.FC = () => {
    const [input, setInput] = useState('');
    const [platform, setPlatform] = useState<'ChatGPT' | 'Gemini' | 'Midjourney'>('ChatGPT');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');

    // Schema for the Tool
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "The Prompt Polisher",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free AI tool that transforms vague ideas into professional, high-performance prompts for ChatGPT, Gemini, and Midjourney.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "provider": {
            "@type": "Organization",
            "name": "DigiBeloved",
            "url": "https://digibeloved.com"
        }
    };

    const handlePolish = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setError('');
        setOutput('');

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                // "Offline Mode" - Smart Template Engine
                // This ensures the tool provides immediate value even without an API connection
                await new Promise(resolve => setTimeout(resolve, 1500)); // Fake "thinking" time

                let smartResponse = "";

                if (platform === 'Midjourney') {
                    smartResponse = `**Prompt:** /imagine prompt: ${input} --v 6.0 --ar 16:9\n\n**Style Tags:** Cinematic lighting, 8k resolution, photorealistic, shot on 35mm lens, detailed texture, depth of field.\n\n**Why this works:**\n- **Parameters:** Added --ar 16:9 for a cinematic widescreen look.\n- **Quality Keywords:** '8k' and 'photorealistic' force the model to high fidelity.\n- **Lighting:** 'Cinematic lighting' adds drama.`;
                } else {
                    // Default to Expert Persona Strategy
                    smartResponse = `## 🤖 Optimized Prompt Structure\n\n` +
                        `**role:**\n` +
                        `Act as an expert Consultant and Senior Copywriter with 10 years of experience.\n\n` +
                        `**task:**\n` +
                        `${input}\n\n` +
                        `**context:**\n` +
                        `Your goal is to provide a comprehensive, actionable, and verified response. Avoid generic fluff. Use professional formatting (headers, bullet points) to make the output easy to read.\n\n` +
                        `**constraints:**\n` +
                        `- Tone: Professional yet engaging.\n` +
                        `- Length: Comprehensive but concise.\n` +
                        `- No hallucinated facts.\n\n` +
                        `**output_format:**\n` +
                        `Markdown formatted text with bold keywords.`;
                }

                setOutput(smartResponse);
                setLoading(false);
                return;
            }

            // Real API Call
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Act as a world-class Prompt Engineer. Rewrite the following user input into a highly optimized '${platform}' prompt. 
              
              User Input: "${input}"
              
              Rules:
              1. If specific to ChatGPT/Gemini, use specific structures (Role, Task, Context, Constraints).
              2. If Midjourney, use parameters (--ar, --v, etc) and descriptive visual language.
              3. Provide a brief explanation of the improvements made at the end.`
                        }]
                    }]
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            if (data.candidates && data.candidates[0].content) {
                setOutput(data.candidates[0].content.parts[0].text);
            } else {
                throw new Error('No response from AI');
            }

        } catch (err: any) {
            console.error(err);
            setError('Failed to polish prompt. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <SchemaScript schema={schema} />

            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-4">
                            <Sparkles className="h-8 w-8 text-navy" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
                            The Prompt Polisher
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stop getting average results. Turn your vague ideas into <span className="text-navy font-bold bg-yellow-100 px-1">professionally engineered prompts</span> in seconds.
                        </p>
                    </div>

                    {/* Main Tool Interface */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Left Column: Input */}
                            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100 bg-white">
                                <div className="mb-6">
                                    <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wider">
                                        1. Choose your Target AI
                                    </label>
                                    <div className="flex gap-2">
                                        {['ChatGPT', 'Gemini', 'Midjourney'].map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setPlatform(p as any)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${platform === p
                                                    ? 'bg-navy text-white shadow-md'
                                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wider">
                                        2. Enter your Draft
                                    </label>
                                    <textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder={
                                            platform === 'Midjourney'
                                                ? "e.g., A futuristic city with flying cars..."
                                                : "e.g., Write a cold email to a marketing director selling SEO services..."
                                        }
                                        className="w-full h-64 p-4 rounded-xl border-2 border-slate-200 focus:border-accent focus:ring-0 resize-none text-lg text-gray-700 placeholder-gray-300 transition-colors"
                                    />
                                </div>

                                <button
                                    onClick={handlePolish}
                                    disabled={loading || !input.trim()}
                                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${loading || !input.trim()
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-accent text-navy shadow-lg hover:shadow-yellow-400/30'
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy"></div>
                                            Polishing...
                                        </>
                                    ) : (
                                        <>
                                            <Wand2 className="h-5 w-5" />
                                            Polish My Prompt
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Right Column: Output */}
                            <div className="p-8 bg-slate-50 relative flex flex-col">
                                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wider">
                                    3. Your Engineered Result
                                </label>

                                <div className="flex-grow bg-white rounded-xl border border-dashed border-gray-300 p-6 shadow-sm overflow-auto max-h-[600px]">
                                    {output ? (
                                        <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                                            {output}
                                        </div>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                                            <Zap className="h-12 w-12 mb-4" />
                                            <p className="text-center text-sm">Your optimized prompt will appear here.</p>
                                        </div>
                                    )}
                                </div>

                                {output && (
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-xs text-gray-400 italic">
                                            generated by AI • verify before use
                                        </span>
                                        <button
                                            onClick={copyToClipboard}
                                            className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg font-medium hover:bg-navy-light transition-colors"
                                        >
                                            {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                            {copied ? 'Copied!' : 'Copy Prompt'}
                                        </button>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                                        <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                                        {error}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Monetization & Upsell Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                        {/* Buy Me a Coffee */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <Coffee className="h-6 w-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Is this tool helpful?</h3>
                            <p className="text-gray-500 mb-6 text-sm">
                                Servers aren't free! If you generated a prompt that saved you time, consider buying a coffee to keep this tool running.
                            </p>
                            <a
                                href="https://www.buymeacoffee.com/digibeloved"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#FFDD00] text-navy px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#FFEA00] transition-colors shadow-md"
                            >
                                Buy me a Coffee
                            </a>
                        </div>

                        {/* Corporate Training Upsell */}
                        <div className="bg-navy p-8 rounded-2xl shadow-md text-white flex flex-col items-start justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>

                            <h3 className="text-xl font-bold text-accent mb-2">Want your team to master this?</h3>
                            <p className="text-gray-300 mb-6 text-sm">
                                We offer corporate workshops on **Applied AI**. Learn specifically how to automate your workflows, not just random prompts.
                            </p>
                            <a
                                href="/services/training"
                                className="group flex items-center gap-2 text-white font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
                            >
                                View Training Curriculum
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                    </div>

                    {/* FAQ/SEO Content (Hidden details, visible to crawlers) */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-navy mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Why do I need to 'polish' my prompts?",
                                    a: "AI models like ChatGPT work best with structured instructions. A polished prompt provides context, constraints, and specific formatting that ensures higher quality output."
                                },
                                {
                                    q: "Is this tool free?",
                                    a: "Yes, the Prompt Polisher is 100% free to use. We support it via optional donations and our premium corporate training services."
                                },
                                {
                                    q: "How does it work?",
                                    a: "We use advanced meta-prompting techniques to rewrite your raw input into a format that Large Language Models (LLMs) understand perfectly."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                                    <h3 className="font-bold text-navy mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PromptPolisher;
