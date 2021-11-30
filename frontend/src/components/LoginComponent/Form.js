import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoginSuccess from "./LoginSuccess";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {" "}
      {!formIsSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <LoginSuccess />
      )}{" "}
    </div>
  );
};

export default Form;
