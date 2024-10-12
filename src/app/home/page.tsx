import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    title: 'Understanding Next.js',
    description: 'A comprehensive guide to understanding the basics and advanced concepts of Next.js.',
    image: '/images/blog1.png',
    link: '/blog/post1',
  },
  {
    title: 'React and Tailwind CSS',
    description: 'Learn how to integrate Tailwind CSS with React for fast and efficient styling.',
    image: '/images/blog2.png',
    link: '/blog/post2',
  },
  {
    title: 'JavaScript Tips and Tricks',
    description: 'Unlock the secrets of JavaScript with practical tips and tricks for every developer.',
    image: '/images/blog3.png',
    link: '/blog/post3',
  },
  {
    title: 'Advanced TypeScript Patterns',
    description: 'Master TypeScript with advanced patterns and best practices for large-scale applications.',
    image: '/images/blog4.png',
    link: '/blog/post4',
  },
  {
    title: 'State Management with Redux Toolkit',
    description: 'A deep dive into state management using Redux Toolkit in modern React applications.',
    image: '/images/blog5.png',
    link: '/blog/post5',
  },
  {
    title: 'Deploying Next.js Apps on Vercel',
    description: 'Learn the best practices for deploying your Next.js applications on Vercel.',
    image: '/images/blog6.png',
    link: '/blog/post6',
  },
];

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Welcome to My Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <Link href={blog.link}>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;