import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  handleRenderSelect = () => {
    return this.props.select.map((item, index) => {
      // them css cho button duoc chon
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid red" };
      } else {
        border = { border: "none" };
      }
      return (
        <button
          key={index}
          onClick={() => {
            this.props.datCuoc(item.ma);
          }}
        >
          <img
            style={border}
            src={item.hinhAnh}
            alt=""
            className="h-8 border-2 rounded-sm bg-amber-50 p-1"
          />
        </button>
      );
    });
  };

  render() {
    return (
      <div className="flex flex-col w-full">
        <div className="show-select speech-bubble">
          <img
            src={this.props.select.find((item) => item.datCuoc).hinhAnh}
            alt=""
            className="h-20 w-20 mx-auto bg-white"
          />
        </div>
        <div className="player ">
          <img src="./img/player.png" alt="" className="h-44" />
        </div>
        <div className="selected flex justify-between">
          {this.handleRenderSelect()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    select: state.MyGameReducer.select,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({ type: "DAT_CUOC", maCuoc });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
