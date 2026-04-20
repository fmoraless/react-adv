import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components/MyTextInput";
import { MyCheckbox } from "../components/MyCheckbox";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstraction = () => {
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
      <h1>Formik Abtractions</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
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
          terms: Yup.boolean().oneOf(
            [true],
            "Debe de aceptar los terminos y condiciones",
          ),
          jobType: Yup.string()
            .required("Job type is required")
            .notOneOf(["other"], "Other is not a valid job type"),
        })}

        /* Campos formulatio */
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="email@domain.com"
              type="email"
            />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" className="error" />

            <MyCheckbox
              name="terms"
              label="I accept the terms and conditions"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
