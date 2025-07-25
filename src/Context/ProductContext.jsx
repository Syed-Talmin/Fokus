import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Fokus Hydration Pack of 3",
      tag: "3 Flavors, 1 Bottle Each",
      price: "450.00",
      image: "/Pack_of_3_copy_2.webp",
    },
    {
      name: "Fokus Hydration - Kiwi Lemon",
      bgColour: `bg-[var(--color-green)]`,
      theme:"#94DA49",
      tag: "Single Flavor, 3 Bottle",
      price: "450.00",
      gallery:[
        "/Green_Gallery (1).webp","/Green_Gallery (2).webp","/Green_Gallery (3).webp","/Green_Gallery (4).webp"
      ],
      image: "/fokus_green.webp",
      description: "Refreshing Kiwi with a zesty lemon twist.",
    },
    {
      name: "Fokus Hydration - Mango Pineapple",
      bgColour: `bg-[var(--color-yellow)]`,
      theme:"#FFE060",
      tag: "Single Flavor, 3 Bottle",
      price: "450.00",
      gallery:[
        "/Yellow_Gallery (1).webp","/Yellow_Gallery (2).webp","/Yellow_Gallery (3).webp","/Yellow_Gallery (4).webp"
      ],
      image: "/fokus_yellow.webp",
      description: "Tropical fusion of mango and pineapple.",
    },
    {
      name: "Fokus Hydration - Strawberry Watermelon",
      bgColour: `bg-[var(--color-red)]`,
      theme:"#FF6262",
      tag: "Single Flavor, 3 Bottle",
      price: "450.00",
      gallery:[
        "/Red_Gallery (1).webp","/Red_Gallery (2).webp","/Red_Gallery (3).webp","/Red_Gallery (4).webp"
      ],
      image: "/fokus_red.webp",
      description: "Sweet and juicy strawberry watermelon flavor.",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
};
