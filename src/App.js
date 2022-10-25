import "./App.css";
import "swiper/scss";
import "swiper/css/navigation";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
// import ProductDetail from "";
// import {LayoutDefault}
const Homepage = lazy(() => import("./pages/Homepage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Error = lazy(() => import("./components/Error"));
// const LayoutDefault = lazy

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetail />}
          ></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
