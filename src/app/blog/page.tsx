import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default async function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="p-6 max-w-5xl mx-auto">
            {/* Header Section */}
            <section className="text-center mt-20 mb-12">
                <h1 className="text-6xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
                    Explore My Blog
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Thoughts, stories, and ideas from my journey.
                </p>
            </section>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(({ id, title, date }) => (
                    <div
                        key={id}
                        className="relative overflow-hidden rounded-lg shadow-lg group bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:scale-105 transform transition-transform duration-300"
                    >
                        {/* Post Title */}
                        <div className="p-6">
                            <Link href={`/blog/${id}`}>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                                    {title}
                                </h2>
                            </Link>
                            {/* Date */}
                            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                        </div>

                        {/* Decorative Accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <footer className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-400">
                    Stay tuned for more exciting updates and stories.
                </p>
            </footer>
        </main>
    );
}