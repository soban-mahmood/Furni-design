import React, { useState } from "react";

const Chechout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="container mx-auto    p-4">
        <div className="mb-5">
          <div className="border p-4 rounded alert alert-info">
            Returning customer?{" "}
            <a href="#" className="text-blue-500">
              Click here
            </a>{" "}
            to login
          </div>
        </div>
        <div className="md:flex flex">
          <div className="md:w-1/2 mb-5 md:mb-0">
            <h2 className="text-2xl mb-3">Billing Details</h2>
            <div className="p-3 lg:p-5 border bg-white">
              <div className="mb-4">
                <label htmlFor="c_country" className="block mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select id="c_country" className="form-select w-full">
                  <option value={1}>Select a country</option>
                  <option value={2}>Bangladesh</option>
                  <option value={3}>Algeria</option>
                  <option value={4}>Afghanistan</option>
                  <option value={5}>Ghana</option>
                  <option value={6}>Albania</option>
                  <option value={7}>Bahrain</option>
                  <option value={8}>Colombia</option>
                  <option value={9}>Dominican Republic</option>
                </select>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_fname" className="block mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_fname"
                    name="c_fname"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_lname" className="block mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_lname"
                    name="c_lname"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="c_companyname" className="block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-input w-full"
                  id="c_companyname"
                  name="c_companyname"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="c_address" className="block mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full"
                  id="c_address"
                  name="c_address"
                  placeholder="Street address"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-input w-full"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_state_country" className="block mb-2">
                    State / Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_state_country"
                    name="c_state_country"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_postal_zip" className="block mb-2">
                    Postal / Zip <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_postal_zip"
                    name="c_postal_zip"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-5">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_email_address" className="block mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_email_address"
                    name="c_email_address"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="c_phone" className="block mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input w-full"
                    id="c_phone"
                    name="c_phone"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="c_ship_different_address"
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    defaultValue={1}
                    id="c_ship_different_address"
                  />{" "}
                  Ship To A Different Address?
                </label>
                <div className="relative">
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={toggleDropdown}
                  >
                    Toggle Dropdown
                  </button>
                  <div
                    className={`${
                      isOpen ? "block" : "hidden"
                    } absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg`}
                  >
                    <div className="mb-4">
                      <label htmlFor="c_diff_country" className="block mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="c_diff_country"
                        className="form-select w-full"
                      >
                        <option value={1}>Select a country</option>
                        <option value={2}>Bangladesh</option>
                        <option value={3}>Algeria</option>
                        <option value={4}>Afghanistan</option>
                        <option value={5}>Ghana</option>
                        <option value={6}>Albania</option>
                        <option value={7}>Bahrain</option>
                        <option value={8}>Colombia</option>
                        <option value={9}>Dominican Republic</option>
                      </select>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="c_diff_fname" className="block mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_fname"
                          name="c_diff_fname"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="c_diff_lname" className="block mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_lname"
                          name="c_diff_lname"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="c_diff_companyname"
                        className="block mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-input w-full"
                        id="c_diff_companyname"
                        name="c_diff_companyname"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="c_diff_address" className="block mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full"
                        id="c_diff_address"
                        name="c_diff_address"
                        placeholder="Street address"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-input w-full"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label
                          htmlFor="c_diff_state_country"
                          className="block mb-2"
                        >
                          State / Country{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_state_country"
                          name="c_diff_state_country"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label
                          htmlFor="c_diff_postal_zip"
                          className="block mb-2"
                        >
                          Postal / Zip <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_postal_zip"
                          name="c_diff_postal_zip"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-5">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label
                          htmlFor="c_diff_email_address"
                          className="block mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_email_address"
                          name="c_diff_email_address"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="c_diff_phone" className="block mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input w-full"
                          id="c_diff_phone"
                          name="c_diff_phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="c_order_notes" className="block mb-2">
                  Order Notes
                </label>
                <textarea
                  name="c_order_notes"
                  id="c_order_notes"
                  cols={30}
                  rows={5}
                  className="form-textarea w-full"
                  placeholder="Write your notes here..."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-5">
              <h2 className="text-2xl mb-3">Coupon Code</h2>
              <div className="p-3 lg:p-5 border bg-white">
                <label htmlFor="c_code" className="block mb-3">
                  Enter your coupon code if you have one
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="form-input w-full mr-2"
                    id="c_code"
                    placeholder="Coupon Code"
                    aria-label="Coupon Code"
                  />
                  <button
                    className="btn btn-black btn-sm"
                    type="button"
                    id="button-addon2"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="text-2xl mb-3">Your Order</h2>
              <div className="p-3 lg:p-5 border bg-white">
                <table className="table-auto w-full mb-5">
                  <thead>
                    <tr>
                      <th className="text-left">Product</th>
                      <th className="text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Top Up T-Shirt <strong className="mx-2">x</strong> 1
                      </td>
                      <td>$250.00</td>
                    </tr>
                    <tr>
                      <td>
                        Polo Shirt <strong className="mx-2">x</strong> 1
                      </td>
                      <td>$100.00</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Cart Subtotal</td>
                      <td className="font-bold">$350.00</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Order Total</td>
                      <td className="font-bold">$350.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="border p-3 mb-3">
                  <h3 className="text-lg mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsebank"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsebank"
                    >
                      Direct Bank Transfer
                    </a>
                  </h3>
                  <div className="collapse" id="collapsebank">
                    <div className="py-2">
                      <p className="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border p-3 mb-3">
                  <h3 className="text-lg mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsecheque"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsecheque"
                    >
                      Cheque Payment
                    </a>
                  </h3>
                  <div className="collapse" id="collapsecheque">
                    <div className="py-2">
                      <p className="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border p-3 mb-5">
                  <h3 className="text-lg mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsepaypal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsepaypal"
                    >
                      Paypal
                    </a>
                  </h3>
                  <div className="collapse" id="collapsepaypal">
                    <div className="py-2">
                      <p className="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-black btn-lg py-3 w-full"
                    onclick="window.location='thankyou.html'"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chechout;
