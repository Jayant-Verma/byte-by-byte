import { getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export default async function PostPage({ params }: { params: { id: string } }) {
    // Destructure params asynchronously if needed
    const { id } = await params;

    // Fetch post data
    const postData = getPostData(id);

    // Trigger 404 if post data is not found
    if (!postData) {
        return notFound();
    }

    // Convert Markdown content to HTML
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
}