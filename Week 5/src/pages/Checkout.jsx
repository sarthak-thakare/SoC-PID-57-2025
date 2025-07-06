import Features from '../components/Features';
import Hero from "../components/Hero";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";



const Checkout = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row">
        <BillingForm />
        <OrderSummary />
      </div>
    <Features />
      <Footer />
    </>
  );
};

export default Checkout;
