import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function HomePage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id} className="mb-4">
            <Link href={`/posts/${id}`}>
              <p className="text-blue-600 hover:underline">{title}</p>
            </Link>
            <p className="text-gray-600">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}