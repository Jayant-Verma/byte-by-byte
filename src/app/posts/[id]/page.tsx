import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
    try {
        const postData = getPostData(params.id);

        if (!postData) {
            return notFound(); 
        }

        const processedContent = await remark().use(html).process(postData.content);
        const contentHtml = processedContent.toString();

        return (
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">{postData.title}</h1>
                <p className="text-gray-600 mb-4">{postData.date}</p>
                <div className="prose">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching post data:", error);
        return notFound();
    }
}