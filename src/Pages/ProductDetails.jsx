import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import ImageSwiper from "../Components/ImageSwiper";

const ProductDetails = () => {
  const [showProduct, setShowProduct] = useState([]);
  const { id } = useParams();
  const { products, cartItems, setCartItems } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.filter((product, idx) => idx === parseInt(id));
    setShowProduct(product);
  }, [id, products]);

  if (showProduct?.length === 0) {
    return <h1 className="text-red-500 text-center mt-20">Something Went Wrong</h1>;
  }

  return (
    <>
      {showProduct.map((item, index) => (
        <div
          key={index} 
          style={{ background: `linear-gradient(to bottom right,${item.theme}, #fff)` }}
          className="min-h-screen flex flex-col items-center px-4 md:px-10 py-10"
        >
    
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-7xl w-full flex flex-col md:flex-row gap-10">
  
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-sm text-orange-500 font-medium uppercase">New</h2>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{item.name}</h1>
                <p className="text-xl font-semibold text-gray-700 mt-2">
                  Rs {item.price} <span className="text-base">(3 X 150)</span>
                </p>
              </div>

              <h5 className="text-sm opacity-90 font-bold text-center bg-black text-white px-5 py-2 rounded-md w-fit">
                {item.tag}
              </h5>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>

              <div className="w-full mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Flavor</h4>
                <div className="flex gap-3 flex-wrap">
                  {products.map((elem, i) =>
                    i > 0 ? (
                      <img
                        key={i}
                        onClick={() => navigate(`/product/${i}`)}
                        src={elem.gallery[0]}
                        alt={elem.name}
                        className="w-20 h-20 object-cover border-2 border-transparent hover:border-black rounded-xl cursor-pointer"
                      />
                    ) : null
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => setCartItems([...cartItems, item])}
                  className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Add to Bag
                </button>
                <button className="border border-gray-400 px-6 py-3 rounded-full text-sm hover:border-black transition">
                  Favorite
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-[300px] md:max-w-[400px]">
                <ImageSwiper images={item.gallery} />
              </div>
            </div>
          </div>

          {/* Feature Blocks */}
          <div className="mt-16 w-full max-w-6xl text-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
            {[
              {
                title: "3x Hydration",
                desc: "Formulated with electrolytes and vitamins to keep you hydrated throughout the day.",
              },
              {
                title: "LCLT + 5-HTP",
                desc: "Support mental clarity and mood boost using science-backed natural ingredients.",
              },
              {
                title: "No Sugar, No Caffeine",
                desc: "Completely free from added sugars and caffeine. Clean and healthy.",
              },
              {
                title: "Designed for Performance",
                desc: "Perfect for pre-workout, work focus, or daily hydration.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow rounded-xl p-6">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
