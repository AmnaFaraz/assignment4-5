import Link from 'next/link';
import '../globals.css';

const Header = () => {
  return (
    <header className="animate-slide-top">
    <header className="bg-primary text-white p-4 shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blogs</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
    </header>
  );
};

export default Header;
