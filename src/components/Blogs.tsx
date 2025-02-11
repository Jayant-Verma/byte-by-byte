'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Post {
    id: string;
    title: string;
    date: string;
    tags?: string[];
}

interface BlogClientProps {
    posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract unique tags
    const allTags: string[] = [...new Set(posts.flatMap(post => post.tags || []))];

    // Filter posts based on selected tag
    const filteredPosts = selectedTag ? posts.filter(post => post.tags?.includes(selectedTag)) : posts;

    return (
        <main className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <motion.section 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mt-16 mb-10"
            >
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    Explore My Blog
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    Insights, stories, and experiences from my journey.
                </p>
            </motion.section>

            {/* Tag Filter Section */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
            >
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        !selectedTag 
                            ? 'bg-orange-500 text-white shadow-md scale-110' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <motion.button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        whileHover={{ scale: 1.15, rotate: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedTag === tag 
                                ? 'bg-orange-500 text-white shadow-lg scale-110' 
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        {tag}
                    </motion.button>
                ))}
            </motion.div>

            {/* Blog Post Grid */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {filteredPosts.map(({ id, title, date, tags }) => (
                    <motion.div
                        key={id}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.03, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group"
                        >
                            <Link href={`/blog/${id}`}>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-all group-hover:text-gray-500">
                                        {title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {tags?.map(tag => (
                                            <motion.span
                                                key={tag}
                                                whileHover={{ scale: 1.1, rotate: -2 }}
                                                className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-full shadow-md transition-all duration-300"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </Link>

                            {/* Animated Bottom Border - Expanding from center */}
                            <motion.div
                                initial={{ scaleX: 1 }}
                                whileHover={{ scaleX: 1, originX: 0.5 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="absolute bottom-0 transform -translate-x-1/2 w-0 group-hover:w-full h-1 bg-gradient-to-r from-orange-800 to-orange-400 transition-all duration-300"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}