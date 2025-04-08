import { useFormik } from "formik";
import React from "react";
import { SignupSchema } from "./Signupschema";
//Step 1

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const FormsValidation = () => {
  //step 2 create the formik object

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues, //step 3 start with initial values
      //step 4 create the validation schema
      validationSchema: SignupSchema,

      onSubmit: (values, action) => {
        //step 5 create the onSubmit function
        // Perform your form submission logic here
        alert("Form submitted successfully");
        action.resetForm(); // Reset the form after submission
      },
    });
  console.log("Form values", values);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit} //step 6 create the onSubmit function
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            name="name"
            id="name"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-red-500 text-sm mt-1">
            {touched.name && errors.name}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            name="email"
            id="email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-red-500 text-sm mt-1">
            {touched.email && errors.email}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            name="password"
            id="password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-red-500 text-sm mt-1">
            {touched.password && errors.password}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            autoComplete="off"
            name="confirmPassword"
            id="confirmPassword"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-red-500 text-sm mt-1">
            {touched.confirmPassword && errors.confirmPassword}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormsValidation;
