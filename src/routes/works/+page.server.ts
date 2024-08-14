import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

interface Item {
    title: string;
    link: string;
    description: string;
    date: string;
}

export async function load() {
    try {
        const filePath = path.resolve('content/works.yaml');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        // YAML を JavaScript オブジェクトにパースする
        const yamlData = parse(fileContent) as { items: Item[] };
        
        // 日付でソート (新しい日付が上に来るように)
        const sortedItems = yamlData.items.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        
        return {
            items: sortedItems
        };
    } catch (error) {
        console.error('Error reading YAML file:', error);
        
        return {
            items: []
        };
    }
}