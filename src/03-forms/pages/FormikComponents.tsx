import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikComponents = () => {
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
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log("lala");
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "First name must be less than 15 characters")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Last name must be less than 20 characters")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })}

        /* Campos formulatio */
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="First Name" type="text" />
            <ErrorMessage name="firstName" component="span" className="error" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Last Name" type="text" />
            <ErrorMessage name="lastName" component="span" className="error" />

            {touched.lastName && errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Email" type="email" />
            <ErrorMessage name="email" component="span" className="error" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
