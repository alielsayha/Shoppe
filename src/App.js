import React from "react";
import "./App.scss";
import {
  Home,
  Cart,
  CategoryProduct,
  ProductSingle,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import SearchPage from "./pages/SearchPage/SearchPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LayOut from "./components/LayOut/LayOut";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="product/:id" element={<ProductSingle />} />
              <Route path="category/:category" element={<CategoryProduct />} />
              <Route path="search/:search" element={<SearchPage />} />
              <Route path="cart" element={<Cart />} />
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/register" element={<Register />} /> */}
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>

          {/* <Footer/> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
