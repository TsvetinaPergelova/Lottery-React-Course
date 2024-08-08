import React, { Component } from "react";
import LotteryTicket from "./LotteryTicket";
import { removeTicket } from "../Helper/actions";
import { Button, Typography, Divider } from "antd";

const { Title } = Typography;

class Lottery extends Component {
  renderButton() {
    const { remainingTickets, actions } = this.props;
    if (remainingTickets > 0) {
      return (
        <Button
          block
          type="primary"
          onClick={actions.registerTicket}
          style={{ marginBottom: 10 }}
        >
          BUY TICKET
        </Button>
      );
    }
    return (
      <Button block type="primary" onClick={actions.finish}>
        CHECK FOR PROFIT
      </Button>
    );
  }

  renderTickets() {
    const { tickets, actions } = this.props;
    const lotteryTicketActions = {
      removeTicket: actions.removeTicket,
    };

    const lotteryTickets = tickets.map((ticket, index) => {
      return (
        <LotteryTicket
          actions={lotteryTicketActions}
          key={index}
          index={index}
          color={ticket.color}
          number={ticket.number}
        />
      );
    });

    return lotteryTickets;
  }

  render() {
    return (
      <>
        <Title>Lottery</Title>
        {this.renderButton()}
        <br />
        <small>Remaining tickets: {this.props.remainingTickets}</small>
        <br />

        <Divider>your tickets</Divider>
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery;
