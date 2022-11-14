// import "./App.css";
import "swiper/scss";
import "swiper/css/navigation";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import LayoutPayment from "./layouts/LayoutPayment";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Page
const Homepage = lazy(() => import("./pages/Homepage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Collection = lazy(() => import("./pages/Collection"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutInfoPage = lazy(() => import("./pages/CheckoutInfoPage"));
const CheckoutPaymentPage = lazy(() => import("./pages/CheckoutPaymentPage"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <Suspense>
      <AnimatePresence exitBeforeEnter={true} onExitComplete={() => {}}>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route
              path="/collections/:collectionName"
              element={<Collection />}
            ></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route
              path="/product/:productId"
              element={<ProductDetail />}
            ></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Route>
          <Route element={<LayoutPayment />}>
            <Route
              path="/checkout/information"
              element={<CheckoutInfoPage />}
            ></Route>
            <Route
              path="/checkout/payment"
              element={<CheckoutPaymentPage />}
            ></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
