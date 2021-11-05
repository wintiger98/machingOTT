import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AttendPage from "./components/AttendPage";
import FindIdPw from "./components/FindIdPw";
import GroupPage from "./components/GroupPage";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import Profilepage from "./components/Profilepage";
import SelectPage from "./components/SelectPage";
import AdminPage_Top from "./components/AdminPage_Top";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/selectOTT" component={SelectPage} />
          <Route path="/attendGroup" component={AttendPage} />
          <Route path="/Grouppage" component={GroupPage} />
          <Route path="/findIDPW" component={FindIdPw} />
          <Route path="/profile" component={Profilepage} />
          <Route path="/AdminPage_Top" component={AdminPage_Top} />
        </Switch>
      </div>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        레이아웃 구성확인용
        <br />
        <Link to="/selectOTT">OTT선택</Link>
        <br />
        <Link to="/attendGroup">그룹참가</Link>
        <br />
        <Link to="/Grouppage">그룹페이지</Link>
        <br />
        <Link to="/findIDPW">아이디비번찾기</Link>
        <br />
        <Link to="/profile">프로필화면</Link>
        <br />
        <Link to="/AdminPage_Top">관리자 화면</Link>
        <br />
      </div>
    </BrowserRouter>
  );
}

// 옛날 테스트 내용
// import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         posts: []
//     };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.posts.map(item => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <span>{item.content}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
