import React, { Component } from "react";
import { getRandomColor } from "../Helper/utils";
import { Button, Card } from "antd";

class Final extends Component {
  isWinning() {
    const { tickets, winningNumber } = this.props;
    for (const ticket of tickets) {
      if (ticket.number === winningNumber) {
        return true;
      }
    }
  }

  renderWinning() {
    return (
      <>
        <h2>CONGRATULATIONS!</h2>
        <h3>You won a million dollars!</h3>
        <p>
          The winning number is: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  renderTryAgain() {
    return (
      <>
        <h2>TRY AGAIN!</h2>
        <p>
          The winning number is: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  render() {
    return (
      <Card
        style={{ backgroundColor: getRandomColor() }}
        title={this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
      >
        <Button block onClick={this.props.actions.reset}>
          PLAY AGAIN
        </Button>
      </Card>
    );
  }
}

export default Final;
