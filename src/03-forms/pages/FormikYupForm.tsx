import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupForm = () => {
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "Francisco",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "First name must be less than 15 characters")
          .required("First name is required"),
        lastName: Yup.string()
          .max(20, "Last name must be less than 20 characters")
          .required("Last name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span className="error">{errors.firstName}</span>
        )}

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && (
          <span className="error">{errors.lastName}</span>
        )}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
