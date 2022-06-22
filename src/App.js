import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

import styles from "./styles/modules/app.module.scss";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="container">
        <dir className={styles.app_wrapper}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="product-detail" element={<ProductDetail />}></Route>
              <Route path="cart" element={<Cart />}></Route>

              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          </SearchContext.Provider>
        </dir>
      </div>
    </>
  );
}

export default App;
