import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/button/Button";

const CheckoutPaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  function handlePay() {
    toast.success("Buy successfully", {
      pauseOnHover: false,
      autoClose: 1000,
      progressClassName: "bg-primary",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  return (
    <div>
      <div className=" border border-lightGray rounded-[3px] mb-8 px-3 text-gray text-sm">
        <div className="flex min-[900px]:gap-10 gap-5 py-3">
          <span>Contact</span>
          <span>{state.email}</span>
        </div>
        <div className="border-b border-b-lightGray"></div>
        <div className="flex min-[900px]:gap-10 gap-5 py-3">
          <span>Phone</span>
          <span>{state.phone}</span>
        </div>
        <div className="border-b border-b-lightGray"></div>
        <div className="flex min-[900px]:gap-10 gap-5 py-3">
          <span>Ship to</span>
          <span>
            {state.address}, {state.city}, {state.country}
          </span>
        </div>
      </div>
      <Button blue fluid onClick={handlePay}>
        Pay
      </Button>
    </div>
  );
};

export default CheckoutPaymentPage;
