import React, { useState } from "react";

export default function LoginPage() {
  const [IsLogin, setIsLogin] = useState(false);

  return (
    <div>
      <form>{IsLogin === false ? <h1>Login</h1> : <h1>SignUp</h1>}</form>
      <div>
        {IsLogin === true ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(false);
            }}
          >
            회원가입
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(true);
            }}
          >
            회원가입
          </button>
        )}
      </div>
    </div>
  );
}
