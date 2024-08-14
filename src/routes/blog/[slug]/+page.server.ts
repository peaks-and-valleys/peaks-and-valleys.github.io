import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
    try {
        // slug に基づいて対応する Markdown ファイルを探す
        const filePath = path.resolve('content/blog', `${params.slug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        
        return {
            items: {
                title: data.title,
                description: data.description,
                date: data.date,
                content: marked(content)
            }
        };
    } catch (error) {
        console.error('Error reading Markdown file:', error);
        
        return {
            items: null
        };
    }
}