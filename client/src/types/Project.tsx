export interface Project {
    id: number;
    title: string;
    description?: string;
    techStack?: string[];
    links?: ProjectLink[];
    image: string;
    slug: string;
}

export interface ProjectLink {
    id: number;
    title: string;
    link: string;
}