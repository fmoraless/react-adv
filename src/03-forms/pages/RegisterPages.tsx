import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(registerData);
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
