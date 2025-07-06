import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#FFF3E3] py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
        <div className="flex items-start space-x-4">
          <FaTrophy className="text-3xl text-black" />
          <div>
            <h3 className="text-md font-bold text-black">High Quality</h3>
            <p className="text-sm text-gray-500">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaShieldAlt className="text-3xl text-black" />
          <div>
            <h3 className="text-md font-bold text-black">Warranty Protection</h3>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaShippingFast className="text-3xl text-black" />
          <div>
            <h3 className="text-md font-bold text-black">Free Shipping</h3>
            <p className="text-sm text-gray-500">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaHeadset className="text-3xl text-black" />
          <div>
            <h3 className="text-md font-bold text-black">24 / 7 Support</h3>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
