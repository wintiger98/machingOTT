import React, { Component } from "react";
import Header from "./Header";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header LoginState={false} />
      </div>
    );
  }
}

export default LoginPage;
