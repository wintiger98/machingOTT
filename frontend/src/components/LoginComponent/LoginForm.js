import React, { useState, useEffect } from "react";
import validation from "./validation";

const LoginForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    ID: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorret] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorret(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title"> UOMS </h2>
        </div>
        <form className="form-wrapper">
          <div className="ID">
            <label className="label"> UserID </label>
            <input
              className="input"
              type="text"
              name="ID"
              value={values.ID}
              onChange={handleChange}
            />
            {errors.ID && <p className="error">{errors.ID}</p>}
          </div>

          <div className="password">
            <label className="label"> 비밀번호 </label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div>
            <button className="submit" onClick={handleFormSubmit}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
