import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function load() {
    try {
        const filePath = path.resolve('content/disclaimer.md');      
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const htmlContent = marked(fileContent);

        return {
            content: htmlContent
        };
    } catch (error) {
        console.error('Error reading Markdown file:', error);

        return {
            content: '<p>Error loading content. Please try again later.</p>'
        };
    }
}