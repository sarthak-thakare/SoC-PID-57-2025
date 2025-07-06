const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-500">
        {/* Address */}
        <div>
          <h3 className="text-black font-semibold text-base mb-3">Furniro.</h3>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-black font-semibold text-base mb-3">Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-black font-semibold text-base mb-3">Help</h3>
          <ul className="space-y-2">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black font-semibold text-base mb-3">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2 placeholder:text-gray-400 text-black"
          />
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-6 mt-4">
        2023 Furniro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
