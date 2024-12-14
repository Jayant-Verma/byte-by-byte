import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default async function HomePage() {
    const posts = getSortedPostsData();
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <ul>
                {posts.map(({ id, title, date }) => (
                    <li key={id} className="mb-2">
                        <Link href={`/blog/${id}`}>
                            <div className="text-blue-500 hover:underline">{title}</div>
                        </Link>
                        <br />
                        <small className="text-gray-500">{date}</small>
                    </li>
                ))}
            </ul>
        </main>
    );
}