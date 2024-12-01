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
    let fileNames: string[] = [];
    if (fs.existsSync(postsDirectory)) {
        fileNames = fs.readdirSync(postsDirectory);
    }

    return fileNames
        .map((fileName) => {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            
            return {
                id,
                ...matterResult.data,
                content: matterResult.content,
            } as PostData;
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string): PostData {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
        id,
        ...matterResult.data,
        content: matterResult.content,
    } as PostData;
}