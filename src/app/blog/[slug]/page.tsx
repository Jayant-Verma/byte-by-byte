import { getPostData, getSortedPostsData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const {slug} = params;
    const post = await getPostData(slug);

    return (
        <main className="p-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>
            <article className="prose prose-lg max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        img: ({ src, alt, ...props }) => {
                            const [altText, width, height] = (alt || '')
                                .split('|')
                                .map((part: string) => part.trim());

                            const widthValue = width?.startsWith('width=') ? parseInt(width.split('=')[1], 10) : 800;
                            const heightValue = height?.startsWith('height=') ? parseInt(height.split('=')[1], 10) : 450;

                            return <Image
                                src={src || ''}
                                alt={altText || ''}
                                width={widthValue}
                                height={heightValue}
                                className="rounded-lg"
                                {...props}
                            />
                        },
                        code: ({ node, inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <pre className={`language-${match[1]} p-4 rounded-lg`}>
                                    <code {...props}>{children}</code>
                                </pre>
                            ) : (
                                <code className="bg-gray-200 p-1 rounded" {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>
        </main>
    );
}