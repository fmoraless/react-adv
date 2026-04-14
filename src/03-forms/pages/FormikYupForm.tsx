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
  const { getFieldProps, handleSubmit, errors, touched } =
    useFormik<FormValues>({
      initialValues: {
        firstName: "",
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
          {...getFieldProps("firstName")}
          placeholder="First Name"
        />
        {touched.firstName && errors.firstName && (
          <span className="error">{errors.firstName}</span>
        )}

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          placeholder="Last Name"
        />
        {touched.lastName && errors.lastName && (
          <span className="error">{errors.lastName}</span>
        )}
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" {...getFieldProps("email")} />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
