import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
    const posts = [
        {
            id: 'ai-skill-stack-2026',
            title: '🔑 7 AI Skills You Need in 2026',
            excerpt: "Learn these or get replaced. Most people treat AI skills like a buffet. No system. No progression. Discover the systematic skill stack to move from tourist to native.",
            date: 'February 1, 2026',
            author: 'DigiBeloved',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80', // detailed AI abstract image
            path: '/blog/ai-skill-stack-2026'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="pt-32 pb-16 px-4 text-center bg-slate-50 border-b border-gray-100">
                <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">Insights & Resources</h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
                    Explore our latest thoughts on Artificial Intelligence, Digital Strategy, and Future Tech.
                </p>
            </header>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <Link to={post.path} className="block overflow-hidden h-48">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </Link>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User className="h-4 w-4 mr-1" />
                                        {post.author}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-navy mb-3 leading-tight group-hover:text-accent transition-colors">
                                    <Link to={post.path}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={post.path}
                                    className="inline-flex items-center font-semibold text-accent hover:text-navy transition-colors mt-auto"
                                >
                                    Read Article <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA logic (optional) */}
            <section className="bg-navy py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Join our community to get the latest AI insights and guides delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-3 rounded-lg flex-grow max-w-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <button className="bg-accent text-navy px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
