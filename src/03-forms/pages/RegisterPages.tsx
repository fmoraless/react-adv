import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const { formData, onChange, name, email, password, confirmPassword } =
    useForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          name="name"
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={onChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
