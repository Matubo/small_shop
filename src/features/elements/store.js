import { createStore } from "redux";

function storeChanger(state = [], action) {
  if (action.type === "ADD") {
    if (state.length == 0) {
      action.added.count = 1;
      return [...state, action.added];
    } else {
      let storeArr = state;
      for (let i = 0; i < storeArr.length; i++) {
        if (storeArr[i]["id"] == action.added["id"]) {
          storeArr[i]["count"]++;
          return [...storeArr];
        }
      }
    }
    action.added.count = 1;
    return [...state, action.added];
  }

  if (action.type === "REMOVE") {
    let storeArr = state;
    for (let i = 0; i < storeArr.length; i++) {
      if (storeArr[i]["id"] == action.remove["id"]) {
        if (storeArr[i]["count"] > 1) {
          storeArr[i]["count"]--;
          break;
        } else {
          storeArr.splice(i, 1);
        }
      }
    }
    return [...storeArr];
  }

  if (action.type === "CLEAR_ALL") {
    return [];
  }
  return state;
}

const store = createStore(storeChanger);

export default store;
