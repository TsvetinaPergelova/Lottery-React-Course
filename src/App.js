import React, { Component } from "react";
import "./App.css";
import "antd/dist/reset.css";
import AppHeader from "./Components/AppHeader";
import Lottery from "./Components/Lottery";
import Final from "./Components/Final";
import AppFooter from "./Components/AppFooter";
import AboutUs from "./Components/AboutUs";
import { getRandomNumber } from "./Helper/utils";
import { registerTicket, removeTicket, finish, reset } from "./Helper/actions";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false,
    };

    this.registerTicket = registerTicket.bind(this);
    this.removeTicket = removeTicket.bind(this);
    this.finish = finish.bind(this);
    this.reset = reset.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className="layout">
          <AppHeader />
          <Content style={{ padding: "0 50px", textAlign: "center" }}>
            <div
              style={{
                padding: 24,
                minHeight: 380,
                background: "colorBgContainer",
                borderRadius: "borderRadiusLG",
              }}
            >
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <Home
                      tickets={this.state.tickets}
                      remainingTickets={this.state.remainingTickets}
                      finished={this.state.finished}
                      winningNumber={this.state.winningNumber}
                      registerTicket={this.registerTicket}
                      removeTicket={this.removeTicket}
                      finish={this.finish}
                      reset={this.reset}
                    />
                  }
                />
                <Route path="/about" element={<AboutUs />} />
                {/* <Redirect from="/info" to="/about" /> */}
                <Route
                  path="/info"
                  element={<Navigate to="/about" replace />}
                />
              </Routes>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
