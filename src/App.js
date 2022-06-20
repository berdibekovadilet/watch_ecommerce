import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

import styles from "./styles/modules/app.module.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="container">
        <dir className={styles.app_wrapper}>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />}></Route>
            <Route path="product-detail" element={<ProductDetail />}></Route>
            <Route path="cart" element={<Cart />}></Route>

            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </dir>
      </div>
    </>
  );
}

export default App;
