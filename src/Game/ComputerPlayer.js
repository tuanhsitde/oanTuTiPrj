import React, { Component } from "react";
import { connect } from "react-redux";
class ComputerPlayer extends Component {
  render() {
    return (
      <div className="flex flex-col w-full">
        <div className="show-select speech-bubble">
          <img
            src={this.props.computer.hinhAnh}
            alt=""
            className="h-20 w-20 mx-auto"
          />
        </div>
        <div className="player">
          <img src="./img/playerComputer.png" alt="" className="h-44" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.MyGameReducer.computer,
  };
};
export default connect(mapStateToProps)(ComputerPlayer);
