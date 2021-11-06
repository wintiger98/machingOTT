import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
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
      <div>
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
      </div>
    </div>
  );
}
