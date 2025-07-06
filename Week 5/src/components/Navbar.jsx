import logo from '../assets/logo.png';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Furniro Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-black">Furniro</span>
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm text-black">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Right - Icons */}
        <div className="flex items-center space-x-6 text-xl text-black">
          <FaUser className="cursor-pointer hover:text-gray-600" />
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <FaHeart className="cursor-pointer hover:text-gray-600" />
          <FaShoppingCart className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
