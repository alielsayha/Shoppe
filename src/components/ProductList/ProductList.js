import React from "react";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="product-lists flex flex-wrap  justify-center bg-whitesmoke ">
        {products.length > 0
          ? products.map((product) => {
              let discount =product.price -(product.price * product.discountPercentage) / 100;
              return (
                <Product key={product.id} products={{ ...product, discount }} />
              );
            })
          : "not product"}
      </div>
    </div>
  );
};

export default ProductList;
