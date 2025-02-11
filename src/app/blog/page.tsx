import Blogs from '@/components/Blogs';
import { getSortedPostsData } from '@/lib/posts';

export default async function BlogPage() {
    const posts = await getSortedPostsData(); 
    return <Blogs posts={posts} />;
}