import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Lottery React Course App ©2024 Created by Tsvetina Pergelova
      </Footer>
    );
  }
}

export default AppFooter;
