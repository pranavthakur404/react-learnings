import React from "react";

const ProductCard = ({ id, name, price, category, updateData }) => {
  console.log("child render");
  return (
    <div
      style={{
        border: "1px solid black",
        marginBlock: "10px",
        padding: "10px",
      }}
    >
      <p>ID : {id}</p>
      <p>Name : {name}</p>
      <p>Price : {price}</p>
      <p>Category : {category}</p>
      <button onClick={updateData}>Add to cart</button>
    </div>
  );
};

export default React.memo(ProductCard);
