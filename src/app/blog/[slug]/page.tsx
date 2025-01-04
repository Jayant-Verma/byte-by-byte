import { getPostData, getSortedPostsData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock"; 

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getPostData(slug);

    return (
        <main className="p-6 max-w-6xl mx-auto">
            <header className="text-center mt-20 mb-10">
                <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200">{post.title}</h1>
                <div className="text-gray-500 mb-4 italic text-sm">{post.date}</div>
            </header>

            <article className="prose prose-lg max-w-none text-gray-900 dark:text-gray-100 shadow-lg bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        img: ({ src, alt, ...props }) => {
                            const [altText, width, height] = (alt || "")
                                .split("|")
                                .map((part: string) => part.trim());

                            const widthValue = width?.startsWith("width=")
                                ? parseInt(width.split("=")[1], 10)
                                : 800;
                            const heightValue = height?.startsWith("height=")
                                ? parseInt(height.split("=")[1], 10)
                                : 450;

                            return (
                                    <Image
                                        src={src || ""}
                                        alt={altText || ""}
                                        width={widthValue}
                                        height={heightValue}
                                        className="rounded-lg shadow-lg"
                                        unoptimized
                                        {...props}
                                    />
                            );
                        },
                        code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || "");
                            const language = match?.[1] || "text";

                            if (!inline && match) {
                                return (
                                    <CodeBlock
                                        language={language}
                                        code={String(children).replace(/\n$/, "")}
                                    />
                                );
                            } else {
                                return (
                                    <code className="" {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>

            <footer className="text-center my-12 md:my-4">
                <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reading! Feel free to leave a comment or share your thoughts.
                </p>
            </footer>
        </main>
    );
}