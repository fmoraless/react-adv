import React from "react";
import { useFormik } from "formik";

import "../styles/styles.css";

export const FormikBasicForm = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
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
          value={values.firstName}
        />

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={handleChange}
          value={values.lastName}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
