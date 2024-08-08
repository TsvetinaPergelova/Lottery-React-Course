import React, { Component } from "react";
import Final from "./Final";
import Lottery from "./Lottery";

class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {
      tickets,
      remainingTickets,
      finished,
      winningNumber,
      registerTicket,
      removeTicket,
      finish,
      reset,
    } = this.props;
    const actions = {};

    if (finished) {
      actions.reset = reset;
      return (
        <Final
          actions={actions}
          tickets={tickets}
          winningNumber={winningNumber}
        />
      );
    }

    actions.registerTicket = registerTicket;
    actions.removeTicket = removeTicket;
    actions.finish = finish;

    return (
      <Lottery
        actions={actions}
        tickets={tickets}
        remainingTickets={remainingTickets}
      />
    );
  }
}

export default Home;
