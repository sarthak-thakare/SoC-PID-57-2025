import bgImage from "../assets/checkout-bg.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="relative h-[300px] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content (on top of background) */}
      <div className="relative z-10 text-black">
        <img src={logo} alt="Logo" className="w-12 h-12 mb-4  mx-auto" />
        <h1 className="text-4xl font-bold">Checkout</h1>
        <div className="text-sm text-gray-700 mt-1">
          <span className="font-semibold">Home</span>
          <span className="mx-1">{'>'}</span>
          <span>Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
