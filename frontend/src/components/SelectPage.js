import React from "react";
import { Link } from "react-router-dom";
export default function SelectPage() {
  return (
    <div>
      {/* 상단 바 시작 */}
      <div
        style={{
          width: "auto",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "coral",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <h1>UOMS</h1>
        </div>

        <div>
          <h1 style={{ display: "inline-block", marginRight: "10px" }}>X</h1>
          <button
            style={{
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
              }}
            >
              Profile
            </Link>
          </button>
        </div>
      </div>
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
                marginBottom: "10px",
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
                <button>
                  <Link
                    to="/attendGroup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    넷플릭스
                  </Link>
                </button>
                <button>
                  <Link
                    to="/attendGroup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    웨이브
                  </Link>
                </button>
                <button>
                  <Link
                    to="/attendGroup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    왓챠
                  </Link>
                </button>
                <button>
                  <Link
                    to="/attendGroup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    라프텔
                  </Link>
                </button>
                <button>
                  <Link
                    to="/attendGroup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    티빙
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div style={{ flexBasis: "30%", flexShrink: "0" }}></div>
        </div>
      </div>
    </div>
  );
}
