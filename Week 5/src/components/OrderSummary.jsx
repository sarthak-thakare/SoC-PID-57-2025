import { useState } from "react";

const OrderSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:pl-6 mt-12 lg:mt-0">
      <div className="border p-6 rounded-md shadow-sm bg-white">
        <h2 className="text-md font-semibold mb-4">Product</h2>

        <div className="flex justify-between mb-2">
          <span>Asgaard sofa × 1</span>
          <span>Rs. 250,000.00</span>
        </div>

        <div className="flex justify-between border-t pt-2">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-yellow-600">Rs. 250,000.00</span>
        </div>

        {/* Radio buttons */}
        <div className="mt-6">
          <label className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input
              type="radio"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
              className="accent-black"
            />
            <span className="text-sm">Direct Bank Transfer</span>
          </label>

          {paymentMethod === "bank" && (
            <p className="text-xs text-gray-500 mb-4">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              Your order will not be shipped until the funds have cleared in our account.
            </p>
          )}

          <label className="flex items-center space-x-2 mb-1 cursor-pointer">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="accent-black"
            />
            <span className="text-sm">Cash On Delivery</span>
          </label>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Your personal data will be used to support your experience on this website. See our{" "}
          <span className="underline cursor-pointer">privacy policy</span>.
        </p>

        <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
          Place order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
