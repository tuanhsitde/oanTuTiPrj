import React, { Component } from "react";
import { connect } from "react-redux";
class Result extends Component {
  render() {
    return (
      <div className="text-white">
        <h1 className="text-4xl my-14">{this.props.result}</h1>
        <div>
          <p className="text-4xl">
            So Ban Thang: <span>{this.props.soBanThang}</span>
          </p>
        </div>
        <div>
          <p className="text-4xl my-20">
            Tong So Ban Thang: <span>{this.props.tongSoBanChoi}</span>
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.MyGameReducer.result,
    soBanThang: state.MyGameReducer.soBanThang,
    tongSoBanChoi: state.MyGameReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps)(Result);
