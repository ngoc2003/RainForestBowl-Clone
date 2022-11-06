import React, { useState } from "react";
import {  Form, Formik } from "formik";
import * as Yup from "yup";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import {  useNavigate } from "react-router-dom";
function SearchInput({ className, error, ...props }) {
  return (
    <div
      className={`px-3 py-2 border rounded-[3px]  ${error ? "border-red" : "border-lightGray"} ${className}`}
    >
      <Search right={false} className={"text-left"} icon={false} {...props} />
    </div>
  );
}
const InforForm = () => {
  const navigate = useNavigate();
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
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required!"),
        firstName: Yup.string().required("This field is required!"),
        lastName: Yup.string().required("This field is required!"),
        address: Yup.string().required("This field is required!"),
        city: Yup.string().required("This field is required!"),
        phone: Yup.string().required("This field is required!"),
        postalcode: Yup.string().required("This field is required!"),
        country: Yup.string().required("This field is required!"),
      })}
      onSubmit={(values) => {
        navigate("/checkout/payment", { replace: true, state: { ...values } });
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <Form>
            <div className="flex flex-col mb-8 gap-y-5">
              <h4 className="text-lg ">Contact Information</h4>
              <div>
                <SearchInput
                  placeholder="Email"
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  error = {errors.email && touched.email}
                ></SearchInput>
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              <h4 className="mt-8 text-lg">Shipping Adress</h4>
              <div>
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
                {errors.country && touched.country && (
                  <p className="error">{errors.country}</p>
                )}
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <SearchInput
                    placeholder="First Name"
                    onChange={(e) => setFieldValue("firstName", e.target.value)}
                    className="flex-1"
                    error = {errors.firstName && touched.firstName}
                  ></SearchInput>
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <SearchInput
                    placeholder="Last Name"
                    onChange={(e) => setFieldValue("lastName", e.target.value)}
                    className="flex-1"
                    error={errors.lastName && touched.lastName}
                  ></SearchInput>
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <SearchInput
                  placeholder="Address"
                  onChange={(e) => setFieldValue("address", e.target.value)}
                  error = {errors.address && touched.address}
                ></SearchInput>
                {errors.address && touched.address && (
                  <p className="error">{errors.address}</p>
                )}
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <SearchInput
                    placeholder="City"
                    onChange={(e) => setFieldValue("city", e.target.value)}
                    className="flex-1"
                    error = {errors.city && touched.city}
                  ></SearchInput>
                  {errors.city && touched.city && (
                    <p className="error">{errors.city}</p>
                  )}
                </div>
                <div className="flex-1">
                  <SearchInput
                    placeholder="Postal Code"
                    onChange={(e) =>
                      setFieldValue("postalcode", e.target.value)
                    }
                    className="flex-1"
                    error={errors.postalcode && touched.postalcode}
                  ></SearchInput>
                  {errors.postalcode && touched.postalcode && (
                    <p className="error">{errors.postalcode}</p>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <SearchInput
                  placeholder="Phone number"
                  onChange={(e) => setFieldValue("phone", e.target.value)}
                  error={errors.phone && touched.phone}
                ></SearchInput>
                {errors.phone && touched.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              </div>

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
