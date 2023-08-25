import React, { useEffect } from "react";
import HeaderSlider from "../../components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../store/productSlice";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import { STATUS } from "../../utils/status";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(200));
  }, []);

  const category = useSelector((state) => state.category.categories);
  const products = useSelector((state) => state.product.products);
  const productsStatus = useSelector((state) => state.product.productsStatus);

  const categoriesOne = products.filter(
    (product) => product.category === category[0]
  );
  const categoriesTwo = products.filter(
    (product) => product.category === category[1]
  );
  const categoriesThree = products.filter(
    (product) => product.category === category[2]
  );
  const categoriesFour = products.filter(
    (product) => product.category === category[3]
  );
  const categoriesFive = products.filter(
    (product) => product.category === category[4]
  );
  const categoriesSix = products.filter(
    (product) => product.category === category[5]
  );

  const tempProduct = [];

  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProduct.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProduct[i] = products[randomIndex];
    }
  }

  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-4">
            <div className="categories-item">
              <div className="title-md">
                <h3>See Our Products</h3>
              </div>
              <div>
                {productsStatus === STATUS.LOADING ? (
                  <Loader />
                ) : (
                  <ProductList products={tempProduct} />
                )}
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[0]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesOne} />
                  )}
                </div>
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[1]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesTwo} />
                  )}
                </div>
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[2]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesThree} />
                  )}
                </div>
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[3]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesFive} />
                  )}
                </div>
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[4]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesOne} />
                  )}
                </div>
              </div>
              <div className="category-item">
                <div className="title-md">
                  <h3>{category[6]}</h3>
                </div>
                <div>
                  {productsStatus === STATUS.LOADING ? (
                    <Loader />
                  ) : (
                    <ProductList products={categoriesSix} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
