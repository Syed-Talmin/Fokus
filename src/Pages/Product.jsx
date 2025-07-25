import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { products, cartItems, setCartItems } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 pt-16 pb-5 uppercase">
        Our Fokus Drinks
      </h2>

      {Array.isArray(products) && products.map(
        (item, index) =>
          index === 0 && (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#F14E45] from-15% to-[#FF5449] to-55% rounded-lg overflow-hidden"
            >
              <img
                className="h-[40vh] md:h-[55vh] border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-bg)] w-full md:w-auto object-contain"
                src={item.image}
                alt={item.name}
              />
              <div className="px-6 pt-5 pb-10 flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl uppercase font-black opacity-90 text-[var(--color-text)]">
                  {item.name}
                </h2>
                <h5 className="text-xs md:text-sm opacity-90 font-bold bg-[var(--color-bg)] px-4 py-1 md:px-5 md:py-2 rounded-md w-fit mx-auto md:mx-0">
                  {item.tag}
                </h5>
                <div className="flex gap-2 justify-center md:justify-start text-xl md:text-3xl mt-5">
                  <h3 className="font-bold">Rs. {item.price}</h3>
                  <h3>(Rs. 150x3)</h3>
                </div>
                <p className="text-sm md:text-base">Tax included. Shipping calculated at checkout</p>
                
                <button
                  onClick={() => setCartItems([...cartItems, item])}
                  className="mt-5 bg-[var(--color-text)] text-white px-6 py-2 rounded-lg w-fit shadow-md hover:brightness-110 hover:scale-105 transition mx-auto md:mx-0"
                >
                  Add To Cart
                </button>

                <ul className="text-sm mt-5 bg-[var(--color-bg)] px-6 md:px-10 py-4 md:py-5 rounded-md list-disc space-y-2 text-left">
                  <li className="text-base font-semibold opacity-90">
                    Free Shipping on all orders for 24 Hours
                  </li>
                  <li className="text-base font-semibold opacity-90">
                    Orders will be delivered in 10-15 working days
                  </li>
                  <li className="text-base font-semibold opacity-90">
                    Prepaid orders only
                  </li>
                </ul>
              </div>
            </div>
          )
      )}

      <div className="w-full mt-10">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {Array.isArray(products) &&
            products.map((product, index) => {
              if (index > 0) {
                return (
                  <div
                    key={index}
                    className={`group w-full md:w-1/2 lg:w-1/3 ${product.bgColour} shadow-xl relative py-10 px-6`}
                  >
                    <h5 className="text-xs md:text-sm opacity-90 font-bold text-center bg-[var(--color-bg)] px-4 py-1 rounded-md w-fit absolute top-5 right-5">
                      {product.tag}
                    </h5>

                    <div
                      onClick={() => navigate(`/product/${index}`)}
                      className="flex h-64 md:h-80 w-full justify-center items-center cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain transform hover:-rotate-[1.5deg] hover:scale-[1.1] duration-300 ease-out drop-shadow-xl drop-shadow-zinc-900/70"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold mt-6 text-center">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
                      {product.description}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5">
                      <div className="flex gap-2 text-lg md:text-xl">
                        <h3 className="font-bold">Rs. {product.price}</h3>
                        <h3>(Rs. 150x3)</h3>
                      </div>
                      <button
                        onClick={() => setCartItems([...cartItems, product])}
                        className="bg-[var(--color-text)] text-white px-6 py-2 rounded-md shadow-md hover:brightness-110 hover:scale-[1.03] transition"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
