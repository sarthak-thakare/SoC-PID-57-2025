const BillingForm = () => {
  return (
    <div className="w-full lg:w-1/2 pr-6">
      <h2 className="text-xl font-semibold mb-6">Billing details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border p-2" type="text" placeholder="First Name" />
        <input className="border p-2" type="text" placeholder="Last Name" />
        <input className="border p-2 md:col-span-2" type="text" placeholder="Company Name (Optional)" />
        <select className="border p-2 md:col-span-2">
          <option>Sri Lanka</option>
        </select>
        <input className="border p-2 md:col-span-2" type="text" placeholder="Street address" />
        <input className="border p-2 md:col-span-2" type="text" placeholder="Town / City" />
        <select className="border p-2 md:col-span-2">
          <option>Western Province</option>
        </select>
        <input className="border p-2 md:col-span-2" type="text" placeholder="ZIP Code" />
        <input className="border p-2 md:col-span-2" type="text" placeholder="Phone" />
        <input className="border p-2 md:col-span-2" type="email" placeholder="Email address" />
        <input className="border p-2 md:col-span-2" type="text" placeholder="Additional Information" />
      </form>
    </div>
  );
};

export default BillingForm;
