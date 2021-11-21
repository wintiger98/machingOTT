import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FindIdPw from "./components/FindIdPw";
import GroupPage from "./components/GroupPage";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import Profilepage from "./components/Profilepage_Top";
import SelectPage from "./components/SelectPage";
import AdminPage_Top from "./components/AdminPage_Top";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import AdminRoute from "./routers/AdminRoute";

export default function App() {
  const [isLogin, setisLogin] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        레이아웃 구성확인용
        <br />
        <Link to="/">홈</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
        <Link to="/selectOTT">OTT선택</Link>
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
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <PublicRoute
            restricted
            component={LoginPage}
            isLogin={isLogin}
            path="/login"
            exact
          />
          <PublicRoute
            restricted
            component={FindIdPw}
            isLogin={isLogin}
            path="/findIDPW"
            exact
          />
          <PrivateRoute
            component={SelectPage}
            isLogin={isLogin}
            path="/selectOTT"
            exact
          />
          <PrivateRoute
            component={GroupPage}
            isLogin={isLogin}
            path="/Grouppage"
            exact
          />
          <PrivateRoute
            component={Profilepage}
            isLogin={isLogin}
            path="/profile"
            exact
          />

          <AdminRoute
            component={AdminPage_Top}
            isAdmin={isAdmin}
            path="/AdminPage_Top"
            exact
          />
        </Switch>
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
