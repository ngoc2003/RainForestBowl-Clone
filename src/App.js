import "./App.css";
import "swiper/scss";
import "swiper/css/navigation";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import ScrollToTop from "./utils/ScrollToTop";

// Page
const Homepage = lazy(() => import("./pages/Homepage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <Suspense>
      <ScrollToTop>
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
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
