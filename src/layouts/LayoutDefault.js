import React from "react";
import Header from "./common/Header";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";
import Footer from "./common/Footer";
const LayoutDefault = () => {
  return (
    <div className="relative">
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default withErrorBoundary(LayoutDefault, { FallbackComponent: Error });
