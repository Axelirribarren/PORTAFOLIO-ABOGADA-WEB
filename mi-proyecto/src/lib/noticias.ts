import fm from "front-matter";

// Define the interface for the Frontmatter attributes
export interface NewsAttributes {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    excerpt: string;
    cover: string;
}

// Define the interface for the complete News object including body content
export interface NewsItem extends NewsAttributes {
    content: string;
}

// Load all markdown files from src/content/noticias synchronously
const newsFiles = import.meta.glob("/src/content/noticias/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export const noticias: NewsItem[] = Object.keys(newsFiles)
    .map((path) => {
        const fileContent = newsFiles[path] as string;
        const { attributes, body } = fm<NewsAttributes>(fileContent);

        // Calculate slug from filename if not present in frontmatter (though we put it there)
        const slug = attributes.slug || path.split("/").pop()?.replace(".md", "") || "";

        return {
            ...attributes,
            slug,
            content: body,
        };
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
