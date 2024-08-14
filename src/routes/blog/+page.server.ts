import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Item {
    slug: string;
    title: string;
    description: string;
    date: string;
}

export async function load() {
    try {
        const directoryPath = path.resolve('content/blog');
        const filenames = fs.readdirSync(directoryPath);
        
        const items: Item[] = filenames.map(filename => {
            const filePath = path.join(directoryPath, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            
            const { data, content } = matter(fileContent);

            return {
                slug: filename.replace('.md', ''),
                title: data.title,
                description: data.description,
                date: data.date,
            };
        });
        
        const sortedItems = items.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        
        return {
            items: sortedItems
        };
    } catch (error) {
        console.error('Error reading Markdown files:', error);
        
        return {
            items: []
        };
    }
}