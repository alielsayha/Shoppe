import React, { useEffect, useState } from "react";
import "./ProductSinglePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchAsyncProductSingle,
  fetchAsyncProducts,
} from "../../store/productSlice";
import { addCart, removeAllCart, removeFromCart } from "../../store/cartSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "../../components/ProductList/ProductList";

function ProductSinglePage() {
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const [imageIndex, setImageIndex] = useState(0);
  const [Quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const productSingle = useSelector((state) => state.product.productSingle);
  const productSingleStatus = useSelector(
    (state) => state.product.productSingleStatus
  );

  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [dispatch, id]);

  const filterDataByCategory = products.filter(
    (item) => item.category === productSingle.category
  );

  console.log(products);

  const temp = [];
  if (products.length > 0) {
    for (let i in products) {
      let random = Math.floor(Math.random() * products.length);
      while (temp.includes(products[random])) {
        random = Math.floor(Math.random() * products.length);
      }
      temp[i] = products[random];
    }
  }

  let discount =
    productSingle.price -
    (productSingle.price * productSingle.discountPercentage) / 100;

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increase = () => {
    setQuantity((prevQty) =>
      prevQty + 1 < productSingle.stock ? prevQty + 1 : productSingle.stock
    );
  };

  const decrease = () => {
    setQuantity((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const handelToCart = (productSingle) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addCart({ ...productSingle, qty: Quantity }));
      setCartBtn("Remove To Cart");
      toast.success("Item added to cart!");
    } else {
      dispatch(removeAllCart(productSingle));
      setCartBtn("Add To Cart");
      toast.success("Item Remove From cart!");
    }
  };

  return (
    <div className="container">
      <div className="product-single flex">
        <div className="contentImg">
          <div className="mainImg">
            <img
              src={
                productSingle
                  ? productSingle.images
                    ? productSingle.images[imageIndex]
                    : ""
                  : ""
              }
              alt=""
            />
          </div>
          <div className="subImg flex justify-between my-2">
            {productSingle
              ? productSingle.images
                ? productSingle.images.slice(0, 3).map((item, idx) => {
                    let random = Math.random();
                    return (
                      <img
                        key={random}
                        src={item}
                        alt=""
                        onMouseEnter={() => {
                          setImageIndex(idx);
                        }}
                      />
                    );
                  })
                : ""
              : ""}
          </div>
        </div>

        <div className="product-details font-manrope">
          <div className="title">
            <h3>{productSingle.title}</h3>
            <hr className="my-2" />
          </div>
          <div className="my-2">
            <p>{productSingle.description}</p>
          </div>
          <ul className="flex align-center flex-wrap my-3">
            <li>
              <span className="text-light-orange fw-6">Rate :</span>{" "}
              {productSingle.rating}
            </li>
            <li className="vert-line"></li>
            <li>
              <span className="text-light-orange fw-6">Brand :</span>{" "}
              {productSingle.brand}
            </li>
            <li className="vert-line"></li>
            <li>
              <span className="text-light-orange fw-6">Category :</span>{" "}
              {productSingle.category}
            </li>
          </ul>
          <div className="price">
            <div
              className="text-gray"
              style={{ textDecoration: "line-through" }}
            >
              Old Price : <span>${productSingle.price}</span>
            </div>
            <div className="discountAndPrice flex align-center">
              <div className="text-light-orange fw-9 fs-24">
                ${discount.toFixed(2)}
              </div>
              <div className="discountPercentage">
                {productSingle.discountPercentage}% Off
              </div>
            </div>
          </div>
          <div className="Quantity flex align-center">
            <span>Quantity : </span>
            <div className="qty-change flex align-center mx-4">
              <button onClick={() => decrease()}>
                <i className="fas fa-minus"></i>
              </button>
              <span> {Quantity}</span>
              <button onClick={() => increase()}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="buttonCart flex ">
            <button onClick={() => handelToCart(productSingle)}>
              <i className="fa-solid fa-cart-shopping"></i> {cartBtn}
            </button>
            <Link to="/cart"> Go To Cart</Link>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <hr className="my-4" />

      <div>
        <div className="py-4 bg-light-gray">
          <h3 className="fs-25 fw-7 text-center text-orange">Other Product</h3>
        </div>
        <div className="container">
          <div className="my-4">
            <ProductList products={temp.slice(0, 5)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSinglePage;
