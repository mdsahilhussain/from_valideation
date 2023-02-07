import React, { useRef, useState } from "react";
import "./App.css";
import InputField from "./components/input/InputField";

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: formValue.password,
      required: true,
    },
  ];
  // const userNameRef = useRef();
  //! for this we get form enteries with out re-render the componets we also use useRef() hooks;
  // const data = new FormData(e.target);
  // console.log(Object.fromEntries(data.entries()));

  const handleSubmit = (e) => {
    console.log(formValue);
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Reister</h1>
        {inputs.map((item, index) => (
          <InputField
            key={index}
            {...item}
            value={formValue[inputs.name]}
            onChange={onChange}
          />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
