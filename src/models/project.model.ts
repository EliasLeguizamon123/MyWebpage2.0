export interface Project {
    id: string;
    title: string;
    description: string;
    repo?: string;
    tools: string[];
    images: string[];
    demo?: string;
}
