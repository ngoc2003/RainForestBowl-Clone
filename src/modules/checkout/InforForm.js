import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import { Navigate, useNavigate } from "react-router-dom";
function SearchInput({ className, ...props }) {
  return (
    <div
      className={`px-3 py-2 border rounded-[3px] border-lightGray ${className}`}
    >
      <Search right={false} className={"text-left"} icon={false} {...props} />
    </div>
  );
}
const InforForm = () => {
    const navigate = useNavigate()
  const [agree, setAgree] = useState(false);
  function handleSetAgree() {
    setAgree(!agree);
  }
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
        postalcode: "",
        country: "",
        agree: agree,
      }}
      validationSchema={Yup.object({})}
      onSubmit={(values) => {
        console.log(values);
        navigate('/checkout/payment', { replace: true, state: {...values} })
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <Form>
            <div className="flex flex-col mb-8 gap-y-5">
              <h4 className="text-lg ">Contact Information</h4>
              <SearchInput
                placeholder="Email"
                onChange={(e) => setFieldValue("email", e.target.value)}
              ></SearchInput>

              <h4 className="mt-8 text-lg">Shipping Adress</h4>
              <div className="flex flex-col gap-4">
                <div className="px-3 py-2 border border-lightGray">
                  <select
                    name="country"
                    onChange={(e) => setFieldValue("country", e.target.value)}
                    className="w-full bg-transparent"
                  >
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    <option value="VietNam">VietNam</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3">
                <SearchInput
                  placeholder="First Name"
                  onChange={(e) => setFieldValue("firstName", e.target.value)}
                  className="flex-1"
                ></SearchInput>
                <SearchInput
                  placeholder="Last Name"
                  onChange={(e) => setFieldValue("lastName", e.target.value)}
                  className="flex-1"
                ></SearchInput>
              </div>
              <SearchInput
                placeholder="Address"
                onChange={(e) => setFieldValue("address", e.target.value)}
                className="flex-1"
              ></SearchInput>
              <div className="flex gap-3">
                <SearchInput
                  placeholder="City"
                  onChange={(e) => setFieldValue("city", e.target.value)}
                  className="flex-1"
                ></SearchInput>
                <SearchInput
                  placeholder="Postal Code"
                  onChange={(e) => setFieldValue("postalcode", e.target.value)}
                  className="flex-1"
                ></SearchInput>
              </div>
              <SearchInput
                placeholder="Phone number"
                onChange={(e) => setFieldValue("phone", e.target.value)}
                className="flex-1"
              ></SearchInput>
              <div className="flex gap-3 text-sm">
                <input type="checkbox" onChange={handleSetAgree} />
                <span>Email me with new and offer</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <a href="/cart" className=" text-blue">
                {"< Return to cart"}
              </a>
              <Button blue type="submit" fluid className="max-w-[200px]">
                Continue to payment
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InforForm;
