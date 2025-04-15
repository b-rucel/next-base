import { getAllBlogs } from './markdown';

export type SearchItem = {
  title: string;
  description: string;
  content: string;
  url: string;
  type: 'doc' | 'blog';
};

export async function generateSearchIndex(): Promise<SearchItem[]> {
  const blogs = await getAllBlogs();

  const searchItems: SearchItem[] = [];

  // Add blogs to search index
  blogs?.forEach((blog) => {
    searchItems.push({
      title: blog.title,
      description: blog.description || '',
      content: '', // Note: content needs to be fetched separately
      url: `/blog/${blog.slug}`,
      type: 'blog'
    });
  });

  return searchItems;
}