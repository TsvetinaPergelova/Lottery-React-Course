import React, { Component } from "react";
import { Layout } from "antd";
import { Link, NavLink } from "react-router-dom";

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Link to={"/"} style={{ padding: 50 }}>
            Get Started{" "}
          </Link>
          <Link to={"/about"}>About us</Link>
        </NavLink>
      </Header>
    );
  }
}

export default AppHeader;
