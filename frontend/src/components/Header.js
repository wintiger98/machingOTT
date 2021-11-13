import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Font.css";
import Button from "@restart/ui/esm/Button";
import { blue } from "@material-ui/core/colors";

const Header = () => (
  <div style={{ width: "100%", margin: "0" }}>
    {/*header*/}

    <div
      class="header"
      style={{
        width: "85%",
        display: "flex",
        margin: "1rem auto",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div class="header_logo">
        {/*}UOMS logo, go to main page*/}
        <a
          href="/"
          style={{
            fontFamily: "yg-jalnan",
            fontSize: "36px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "blue",
          }}
        >
          UOMS
        </a>
      </div>

      {/* menu choice */}

      <div
        class="header_menu"
        style={{
          justifyContent: "center",
          display: "block",
          paddingRight: 40,
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            padding: 40,
            fontFamily: "GmarketSansLight",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
          }}
        >
          홈
        </a>

        <a
          href="/selectOTT"
          style={{
            fontFamily: "GmarketSansLight",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
          }}
        >
          그룹선택
        </a>

        <a
          href="/Grouppage"
          style={{
            padding: 40,
            fontFamily: "GmarketSansLight",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
          }}
        >
          MY그룹
        </a>
      </div>

      {/*profile logo, go to profile page*/}
      <div class="SignBtn">
        <Button
          style={{
            fontFamily: "GmarketSansLight",
            marginRight: "1rem",
          }}
        >
          Log in
        </Button>
        <Button
          style={{
            fontFamily: "GmarketSansLight",
            marginRight: "1rem",
          }}
        >
          Sign up
        </Button>
      </div>
    </div>

    <hr />
  </div>
);

export default Header;
