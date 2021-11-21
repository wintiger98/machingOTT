import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function MainPage() {
  const [isLogin, setisLogin] = useState(false);
  const [isAttend, setisAttend] = useState(false);
  return (
    <div>
      <Header LoginState={isLogin} AttendState={isAttend} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          height: "100vh",
          backgroundColor: "grey",
        }}
      >
        이미지 넣을 곳
      </div>
    </div>
  );
}

{
  /* <div>
          <h1>UOMS</h1>
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", marginRight: "5px" }}
            >
              로그인
            </Link>
          </button>
          뒷배경에는 이미지 넣어보기
        </div> */
}
