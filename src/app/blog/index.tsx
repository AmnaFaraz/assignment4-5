import Link from 'next/link';

const blogPosts = [
  { id: 'post1', title: 'Understanding Next.js' },
  { id: 'post2', title: 'React and Tailwind CSS' },
  { id: 'post3', title: 'JavaScript Tips and Tricks' },
  { id: 'post4', title: 'Advanced TypeScript Patterns' },
  { id: 'post5', title: 'State Management with Redux Toolkit' },
  { id: 'post6', title: 'Deploying Next.js Apps on Vercel' },
];

const BlogIndexPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={/blog/${post.id}}>
              <a className="text-blue-600 hover:underline">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndexPage;

