import React, { Component } from "react";
import "../index.css";
import "./GameOanTuTi.css";
import Player from "./Player";
import Result from "./Result";
import ComputerPlayer from "./ComputerPlayer";
import { connect } from "react-redux";

class MyMenuGame extends Component {
  render() {
    return (
      <div className="game__content w-full h-full bg-cover bg-no-repeat fixed">
        <div className=" flex w-9/12 mt-12 mx-auto justify-between items-center justify-center">
          <div className="item__game">
            <Player />
          </div>
          <div className="item__game">
            <Result />
            <button
              className="text-green-400 text-2xl border-2 px-5 py-3 border-green-400 rounded-xl bg-amber-50 "
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="item__game">
            <ComputerPlayer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDisPatchToProp = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let ranDomComputer = setInterval(() => {
        dispatch({
          type: "PLAY_GAME",
        });
        count++;
        if (count === 20) {
          clearInterval(ranDomComputer);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDisPatchToProp)(MyMenuGame);
