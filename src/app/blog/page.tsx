import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default async function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="p-6">
            <h1 className="text-4xl font-bold mb-4">All Blog Posts</h1>
            <ul>
                {posts.map(({ id, title, date }) => (
                    <li key={id} className="mb-3">
                        <Link href={`/blog/${id}`}>
                            <span className="text-blue-500 hover:underline text-xl">{title}</span>
                        </Link>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}