import React, { useEffect, useState } from "react";
import Hero1 from "./Hero1";
import Chechout from "./Chechout";
const logo5 = "https://untree.co/demos/furni/images/product-1.png";
const logo6 = "https://untree.co/demos/furni/images/product-1.png";

const Cart = () => {
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);


  const addProduct = () => {
    const newItem = {
      id: items.length + 1,
      name: "chair",
      price: "$600",
      image: logo6,
      count: items.length + 1,
    };

    
    const dummyItems = [...items,newItem];

    // setItems((prev) => [...items , ...prev]);

    setItems(dummyItems);
    localStorage.setItem("items", JSON.stringify(dummyItems));
  };

  const removeProduct = (id) => {
    const remove = (prev) => prev.filter((item) => item.id !== id)
    setItems(remove);
    localStorage.setItem("items", JSON.stringify(remove));
  };

  const incNumber = () => {
    let newVal = value + 1;
    setValue(newVal);
    localStorage.setItem("value", JSON.stringify(newVal));
  };
  const incNumberCount = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      })
    );
  };
  const decNumber = () => {
    if (value > 0) setValue(value - 1);
    localStorage.setItem("value", JSON.stringify(value));
  };

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("value", "value"));
    const Items = JSON.parse(localStorage.getItem("items", "items"));

    if (Items) {
      setItems(Items);
    }
    if ({ value }) {
      setValue(value);
    }
  }, []);
  return (
    <>
      <Hero1 />

      <div className="container mx-auto p-4">
        <div className="mb-5">
          <div>
            <div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Product</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Quantity</th>
                    <th className="border px-4 py-2">Total</th>
                    <th className="border px-4 py-2">Remove</th>
                  </tr>
                </thead>

                {items.map((product) => {
                  return (
                    <tr>
                      <td className="border px-4 py-2">
                        <img
                          src={product.image}
                          alt="Image"
                          className="w-[160px] h-[160px]"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                      </td>
                      <td className="border  py-2">{product.price}</td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center max-w-xs">
                          <button
                            className="bg-gray-200 px-2 py-1"
                            onClick={decNumber}
                          >
                            −
                          </button>

                          <input
                            id="inputName"
                            value={product.count}
                            type="text"
                            className="text-center w-12 mx-2"
                          />
                          <button
                            className="bg-gray-200 px-2 py-1"
                            onClick={() => incNumberCount(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">$49.00</td>
                      <td className="border px-4 py-2">
                        <li key={items.id}>
                          {items.name}
                          <button
                            href=""
                            className="text-red-600"
                            onClick={() => removeProduct(product.id)}
                          >
                            X
                          </button>
                        </li>
                      </td>
                    </tr>
                  );
                })}

                <button
                  onClick={addProduct}
                  className="bg-black text-white px-8 rounded-xl py-3  "
                >
                  add
                </button>
              </table>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-5">
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Update Cart
          </button>
          <button className="border border-black text-black px-4 py-2 rounded-lg">
            Continue Shopping
          </button>
        </div>
        <div className="mb-5">
          <label className="text-xl font-bold" htmlFor="coupon">
            Coupon
          </label>
          <p>Enter your coupon code if you have one.</p>
          <div className="flex space-x-4">
            <input
              type="text"
              id="coupon"
              className="border py-2 px-4"
              placeholder="Coupon Code"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="pl-5">
          <div className="flex justify-end mb-5">
            <div className="w-1/2">
              <div className="border-b mb-5">
                <h3 className="text-xl font-bold text-right">Cart Totals</h3>
              </div>
              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <strong>$230.00</strong>
              </div>
              <div className="flex justify-between mb-5">
                <span>Total</span>
                <strong>$230.00</strong>
              </div>
              <button
                className="bg-black text-white px-6 py-3 w-full"
                onclick="window.location='checkout.html'"
              >
                <a href="Chechout"> Proceed To Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
