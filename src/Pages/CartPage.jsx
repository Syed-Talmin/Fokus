import React, { useContext, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { ProductContext } from "../Context/ProductContext";

const CartPage = () => {

  const { cartItems, setCartItems } = useContext(ProductContext)

  const handleDelete = (idx) => {
    const updated = cartItems.filter((item,i) => i !== idx);
    setCartItems(updated);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );


  return (
    <div className="w-full min-h-screen bg-[var(--color-bg)] px-4 py-10 text-[#111827] flex flex-col">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item,idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <div className="space-y-1">
                    <h2 className="text-lg md:text-xl font-semibold text-[#111827]">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">{item.tag}</p>
                    <p className="text-md font-medium text-green-600">
                      ₹ {item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(idx)}
                  className="text-red-500 hover:text-red-600 text-2xl self-start sm:self-center transition-transform hover:scale-110"
                >
                  <IoTrashBin />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12 w-full">
          <div className="flex justify-between items-center text-lg md:text-xl font-semibold bg-white px-6 py-5 rounded-xl shadow border border-gray-200">
            <span>Total Amount</span>
            <span className="text-green-600">₹ {totalAmount}</span>
          </div>

          <button
            className="w-full mt-6 py-4 bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-bold rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => alert("Order placed successfully!")}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
