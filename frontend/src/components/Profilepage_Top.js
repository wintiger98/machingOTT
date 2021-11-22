import React, { Component } from "react";
import { Link } from "react-router-dom";

// 프로필 화면은 자기꺼만 보여줘야함
const customer = {
  profileImage: "https://placeimg.com/150/150/1",
  userName: "서시대생서명교",
  OTTName: "WATCHA",
  groupID: 1,
  userID: "devouring123",
  userPassword: "asdf1234",
  realName: "서명교",
  registrationNumber: "9808231234567",
  phoneNum: "01077434495",
  mailAddress: "devouring123@gmail.com",
  sex: "Male",
  job: "Student",
};

const OTTLogoImage = {
  NETFLIX: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
  WATCHA:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png",
  WAVVE: "https://www.gcon.or.kr/fileDownload?titleId=9992&fileId=2",
};

const Profile = {
  payment:
    "https://ecommercenews.eu/wp-content/uploads/2013/06/most_common_payment_methods_in_europe.png",
  management: "http://simpleicon.com/wp-content/uploads/pencil.png",
  logout:
    "https://cdn.icon-icons.com/icons2/2943/PNG/512/logout_icon_184025.png",
};

class ProfilePage_Top extends Component {
  render() {
    return (
      <div>
        // 헤더 부분
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
          <div>
            <h1>현재 사용중인 OTT</h1>
          </div>
          <div>
            {customer.OTTName === "NETFLIX" ? (
              <img
                style={{ display: "inline-block" }}
                width={400 / 3}
                height={300 / 3}
                src={OTTLogoImage.NETFLIX}
                alt="NETFLIX Logo Image"
              />
            ) : customer.OTTName === "WATCHA" ? (
              <img
                style={{ display: "inline-block" }}
                width={233}
                height={300 / 3}
                src={OTTLogoImage.WATCHA}
                alt="WATCHA Logo Image"
              />
            ) : customer.OTTName === "WAVVE" ? (
              <img
                style={{ display: "inline-block" }}
                width={350}
                height={300 / 3}
                src={OTTLogoImage.WAVVE}
                alt="WAVVE Logo Image"
              />
            ) : (
              <h2> OTT를 사용하고 계시지 않습니다.</h2>
            )}
          </div>
        </div>
        // 프로필 부분
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "200px",
            backgroundColor: "burlywood",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "1",
              backgroundColor: "red",
            }}
          >
            <div>
              <img
                style={{ display: "block", margin: "0 auto" }}
                src={customer.profileImage}
                alt="프로필 사진"
              />
            </div>
          </div>

          <div style={{ flex: "1", backgroundColor: "yellow" }}>
            <img
              style={{ display: "block", margin: "0 auto" }}
              src={customer.profileImage}
              alt="프로필 사진"
            />
          </div>
        </div>
        // 결제 창 부분
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "200px",
            backgroundColor: "purple",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/profile/payment"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <img
              style={{
                display: "block",
                margin: "0 auto",
                width: "300px",
                height: "180px",
              }}
              src={Profile.payment}
              alt="결제 관리 사진"
            />
          </Link>
        </div>
        // 프로필 수정 부분
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "200px",
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/profile/management"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <img
              style={{
                display: "block",
                margin: "0 auto",
                width: "150px",
                height: "150px",
              }}
              src={Profile.management}
              alt="프로필 수정"
            />
          </Link>
        </div>
        // 로그 아웃
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "200px",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <img
              style={{
                display: "block",
                margin: "0 auto",
                width: "150px",
                height: "150px",
              }}
              src={Profile.logout}
              alt="로그아웃"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfilePage_Top;
