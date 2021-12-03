import React, { useState, useEffect } from "react";
import validation from "./validation";
import axios from "axios";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    ID: "",
    fullname: "",
    nickname: "",
    email: "",
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
    axios
      .post("http://localhost:8000/account/signup/", {
        userID: values.ID,
        email: values.email,
        realname: values.fullname,
        nickname: values.nickname,
        password: values.password,
        phoneNum: "000-0000-0000",
      })
      .then(function (res) {
        console.log(res);
      });
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
          <h2 className="title"> UOMS 시작하기 </h2>
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
          <div className="name">
            <label className="label"> 이름 </label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="nickname">
            <label className="label"> 닉네임 </label>
            <input
              className="input"
              type="text"
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
            />
            {errors.nickname && <p className="error">{errors.nickname}</p>}
          </div>
          <div className="email">
            <label className="label"> E-mail </label>
            <input
              className="input"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
