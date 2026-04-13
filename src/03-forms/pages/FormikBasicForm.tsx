import React from "react";
import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicForm = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (firstName.length > 15) {
      errors.firstName = "First name must be less than 15 characters";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    } else if (lastName.length > 20) {
      errors.lastName = "Last name must be less than 20 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

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
      validate,
    });

  return (
    <div>
      <h1>Formik basico</h1>

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
