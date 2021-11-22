import React, { useState, Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Customer from "../Customer";

export default function ProfilePage_Management() {
  const [inputs, setInputs] = useState({
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
  });

  const {
    profileImage,
    userName,
    OTTName,
    groupID,
    userID,
    userPassword,
    realName,
    registrationNumber,
    phoneNum,
    mailAddress,
    sex,
    job,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
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
        <input
          name="userName"
          placeholder="닉네임"
          onChange={onChange}
          value={userName}
        />
        <input
          name="mailAddress"
          placeholder="메일 주소"
          onChange={onChange}
          value={mailAddress}
        />
        <input name="sex" placeholder="성별" onChange={onChange} value={sex} />
        <input name="job" placeholder="직업" onChange={onChange} value={job} />
      </div>

      <div
        style={{
          width: "500px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "coral",
        }}
      >
        <Table>
          <TableRow>
            <TableHead>
              <TableCell>
                <img
                  style={{ display: "block", margin: "0 auto" }}
                  src={inputs.profileImage}
                  alt="프로필 사진"
                />
              </TableCell>
            </TableHead>
            <TableCell> 수정 </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>닉네임</TableCell>
            </TableHead>
            <TableCell>{inputs.userName}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>OTT 이름</TableCell>
            </TableHead>
            <TableCell>{inputs.OTTName}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>그룹 ID</TableCell>
            </TableHead>
            <TableCell>{inputs.groupID}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>아이디</TableCell>
            </TableHead>
            <TableCell>{inputs.userID}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>비밀번호</TableCell>
            </TableHead>
            <TableCell>{inputs.userPassword}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>실명</TableCell>
            </TableHead>
            <TableCell>{inputs.registrationNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>전화번호</TableCell>
            </TableHead>
            <TableCell>{inputs.phoneNum}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>주민번호</TableCell>
            </TableHead>
            <TableCell>{inputs.registrationNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>메일주소</TableCell>
            </TableHead>
            <TableCell>{inputs.mailAddress}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>성별</TableCell>
            </TableHead>
            <TableCell>{inputs.sex}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>
              <TableCell>직업</TableCell>
            </TableHead>
            <TableCell>{inputs.job}</TableCell>
          </TableRow>
        </Table>
      </div>

      <div>
        <b>값: </b>
        {userName} ({mailAddress}) [{sex}] {job}
      </div>
    </div>
  );
}
