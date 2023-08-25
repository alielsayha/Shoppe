import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helper";
import "./Product.scss"

function Product({ products }) {
  let discount = products.price -(products.price * (products.discountPercentage / 100))
  return <Link to={`/product/${products?.id}`} className="linkProducts " key={products?.id}>
    <div className="product-item bg-white">
      <div className="category"> {products?.category}</div>
      <div className="product-item-img">
        <img src={products?.images[0]} alt= {products?.title}/>
      </div>
      <div className="product-item-info fs-14">
        <div className="brand">
          <span>Brand : </span>
          <span className="fw-7">{products?.brand.slice(0 , 10 )}...</span>
        </div>
        <div className="title py-2 fs-11">
        {products?.title.slice(0 , 10 )}...
        </div>
        <div className="price flex align-center justify-center">
          <span className="old-price">
            {formatPrice(products?.price)}
          </span>
          <span className="new-price fs-18">
            ${discount.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  </Link>;
}

export default Product;
