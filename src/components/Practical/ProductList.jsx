import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 800, category: "Electronics" },
  { id: 2, name: "Shoes", price: 50, category: "Fashion" },
  { id: 3, name: "Phone", price: 600, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 20, category: "Fashion" },
];
const ProductList = () => {
  const [cart, setCart] = useState(0);
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const updateData = useCallback(() => {
    setCart((prev) => prev + 1);
  }, []);

  const filteredData = useMemo(() => {
    let tempData =
      category == "all"
        ? products
        : products.filter((list) => list.category == category);

    tempData =
      sortBy == "price"
        ? tempData.slice().sort((a, b) => a.price - b.price)
        : tempData.slice().sort((a, b) => a.name.localeCompare(b.name));

    return tempData;
  }, [category, sortBy]);

  return (
    <div className="w-full">
      <header>
        <select onChange={(e) => setCategory(e.target.value)} name="category">
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} name="sortBy">
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
        <button>Cart : {cart}</button>
        {/* product list */}
        <div>
          {filteredData.map((list, index) => {
            return (
              <ProductCard key={index} {...list} updateData={updateData} />
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default ProductList;
