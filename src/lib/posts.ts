import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostData {
    id: string;
    title: string;
    date: string;
    content: string;
}

export function getSortedPostsData(): PostData[] {
    try {
        // Check if the posts directory exists
        if (!fs.existsSync(postsDirectory)) {
            console.error(`Posts directory not found at: ${postsDirectory}`);
            return [];
        }

        // Read all filenames in the directory
        const fileNames = fs.readdirSync(postsDirectory);

        // Map over filenames and extract post data
        const allPostsData = fileNames
            .filter((fileName) => fileName.endsWith(".md")) // Only process Markdown files
            .map((fileName) => {
                const id = fileName.replace(/\.md$/, ""); // Remove the `.md` extension
                const fullPath = path.join(postsDirectory, fileName);

                try {
                    const fileContents = fs.readFileSync(fullPath, "utf8");
                    const matterResult = matter(fileContents);

                    // Validate required fields in frontmatter
                    if (!matterResult.data.title || !matterResult.data.date) {
                        console.warn(`Missing required frontmatter fields in ${fileName}`);
                        return null; // Skip files with invalid frontmatter
                    }

                    return {
                        id,
                        title: matterResult.data.title,
                        date: matterResult.data.date,
                        content: matterResult.content,
                    } as PostData;
                } catch (error) {
                    console.error(`Error reading file ${fileName}:`, error);
                    return null;
                }
            })
            .filter(Boolean) as PostData[]; // Remove null values

        // Sort posts by date (newest first)
        return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error("Error retrieving sorted posts:", error);
        return [];
    }
}

export function getPostData(id: string): PostData | null {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);

        // Check if the file exists
        if (!fs.existsSync(fullPath)) {
            // console.error(`Post not found: ${id}`);
            return null;
        }

        // Read and parse the file
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        // Validate required fields in frontmatter
        if (!matterResult.data.title || !matterResult.data.date) {
            console.warn(`Missing required frontmatter fields in ${id}.md`);
            return null;
        }

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            content: matterResult.content,
        } as PostData;
    } catch (error) {
        console.error(`Error processing post ${id}:`, error);
        return null;
    }
}