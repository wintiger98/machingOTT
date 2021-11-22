import React, { Component } from "react";
import { Link } from "react-router-dom";

// customer table을 불러옴
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

const PaymentIcons = {
  BackWard: "https://cdn-icons-png.flaticon.com/512/83/83989.png",
};

class ProfilePage_Payment extends Component {
  render() {
    return (
      <div>
        // 카드 관리 부분
        <div>
          <h1>현재 가입 되어 있는 OTT는 {customer.OTTName} 입니다.</h1>
          <h2>가능한 결제</h2>
        </div>
        // 뒤로 가기
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
            to="/profile"
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
              src={PaymentIcons.BackWard}
              alt="뒤로 가기"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfilePage_Payment;
