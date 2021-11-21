import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function SelectPage() {
  const [username, setUsername] = useState("");
  const [OTTname, setOTTname] = useState("");
  const [isAttended, setIsAttended] = useState(true);
  const [currentGroup, setCurrentGroup] = useState(0);

  const OTTLogoImage = {
    NETFLIX:
      "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    WATCHA:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png",
    WAVVE: "https://www.gcon.or.kr/fileDownload?titleId=9992&fileId=2",
    TVING:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/TVING_logo.svg/512px-TVING_logo.svg.png",
  };

  return (
    <div>
      {/* 상단 바 시작 */}
      <Header LoginState={true} AttendState={isAttended} />
      {/* 상단바 끝 */}

      {/* 본문 시작 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div style={{ height: "50px" }}></div>
        <div style={{ display: "flex" }}>
          <div style={{ flexBasis: "30%", flexShrink: "0" }}></div>
          <div style={{ flexBasis: "40%", padding: "10px" }}>
            <div
              style={{
                width: "auto",
                height: "6vh",
                backgroundColor: "#ffecee",
                marginBottom: "10px",
              }}
            >
              생성되어있는 그룹 수(띄워주기)
            </div>
            <div
              style={{
                width: "auto",
                height: "30vh",
                backgroundColor: "#ffecee",
                marginBottom: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ width: "100%", marginBottom: "100px" }}>
                보고싶은 OTT를 선택해주세요
              </h1>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    width: "15%",
                    height: "10vh",
                  }}
                  src={OTTLogoImage.NETFLIX}
                  alt="NETFLIX Logo Image"
                  onClick={function () {
                    setOTTname("NETFLIX");
                    console.log(OTTname);
                  }}
                />
                <img
                  style={{
                    display: "inline-block",
                    width: "15%",
                    height: "10vh",
                  }}
                  src={OTTLogoImage.WATCHA}
                  alt="WATCHA Logo Image"
                  onClick={function () {
                    setOTTname("WATCHA");
                    console.log(OTTname);
                  }}
                />
                <img
                  style={{
                    display: "inline-block",
                    width: "15%",
                    height: "10vh",
                  }}
                  src={OTTLogoImage.WAVVE}
                  alt="WAVVE Logo Image"
                  onClick={function () {
                    setOTTname("WAVVE");
                    console.log(OTTname);
                  }}
                />
                <img
                  style={{
                    display: "inline-block",
                    width: "15%",
                    height: "10vh",
                  }}
                  src={OTTLogoImage.TVING}
                  alt="TVING Logo Image"
                  onClick={function () {
                    setOTTname("TVING");
                    console.log(OTTname);
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "6vh",
                backgroundColor: "#ffecee",
              }}
            >
              <button style={{}}>
                <Link
                  to="/Grouppage"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  그룹참가
                </Link>
              </button>
            </div>
          </div>

          <div style={{ flexBasis: "30%", flexShrink: "0" }}></div>
        </div>
      </div>
    </div>
  );
}
