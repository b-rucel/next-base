import { getAllDocs, getAllBlogs } from './markdown';

export type SearchItem = {
  title: string;
  description: string;
  content: string;
  url: string;
  type: 'doc' | 'blog';
};

export async function generateSearchIndex(): Promise<SearchItem[]> {
  const docs = await getAllDocs();
  const blogs = await getAllBlogs();
  
  const searchItems: SearchItem[] = [];

  // Add docs to search index
  docs?.forEach((doc) => {
    searchItems.push({
      title: doc.title,
      description: doc.description || '',
      content: '', // Note: content needs to be fetched separately
      url: `/docs/${doc.slug}`,
      type: 'doc'
    });
  });

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