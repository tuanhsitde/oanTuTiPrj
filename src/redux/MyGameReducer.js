const stateDefault = {
  select: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  result: "You win!!",
  soBanThang: 0,
  tongSoBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/bua.png" },
};

const myGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let newSelect = [...state.select];
      newSelect = newSelect.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = newSelect.findIndex((item) => item.ma === action.maCuoc);
      if (index !== -1) {
        newSelect[index].datCuoc = true;
      }

      state.select = newSelect;
      return { ...state };
    }
    case "PLAY_GAME": {
      let ramdomNum = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.select[ramdomNum];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let playerChoice = state.select.find((item) => item.datCuoc === true).ma;
      let computerChoice = state.computer.ma;
      switch (playerChoice) {
        case "keo": {
          if (computerChoice === "bua") {
            state.result = "You Lose";
          } else if (computerChoice === "bao") {
            state.result = "You Win";
          } else {
            state.result = "You ===";
          }
          break;
        }
        case "bua": {
          if (computerChoice === "bao") {
            state.result = "You Lose";
          } else if (computerChoice === "keo") {
            state.result = "You Win";
          } else {
            state.result = "You ===";
          }
          break;
        }
        case "bao": {
          if (computerChoice === "keo") {
            state.result = "You Lose";
          } else if (computerChoice === "bua") {
            state.result = "You Win";
          } else {
            state.result = "You ===";
          }
          break;
        }
        default:
          return { ...state };
      }
    }

    default:
      return { ...state };
  }
};
export default myGameReducer;
