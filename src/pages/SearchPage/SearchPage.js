import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, fetchProductBySearch } from "../../store/searchSlice";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

function SearchPage() {
  const { search } = useParams();
  const dispatch = useDispatch();
  const searchProduct = useSelector((state) => state.search.searchProduct);

  useEffect(() => {
    dispatch(clear())
    dispatch(fetchProductBySearch(search));
  }, [dispatch, search]);

  return (
    <div>
      <div className="bg-light-gray my-4 py-4">
        <h3 className="text-center text-orange fs-23 fw-7">SEARCH RESULTS:</h3>
      </div>
      <ProductList products={searchProduct} />
    </div>
  );
}

export default SearchPage;
