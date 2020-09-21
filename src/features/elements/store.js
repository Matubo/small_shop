import { createStore } from "redux";
import { act } from "react-dom/test-utils";

function storeChanger(state = { order: [], price_sum: 0 }, action) {
  if (action.type === "ADD") {
    if (state.order.length == 0) {
      action.added.count = 1;
      return {
        order: [...state.order, action.added],
        price_sum: action.added["price"],
      };
    } else {
      let storeArr = state.order;
      for (let i = 0; i < storeArr.length; i++) {
        if (storeArr[i]["id"] == action.added["id"]) {
          storeArr[i]["count"]++;
          return {
            order: storeArr,
            price_sum: state.price_sum + action.added["price"],
          };
        }
      }
    }
    action.added.count = 1;
    return {
      order: [...state.order, action.added],
      price_sum: state.price_sum + action.added["price"],
    };
  }

  if (action.type === "REMOVE") {
    let storeArr = state.order;
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
    return {
      order: storeArr,
      price_sum: state.price_sum - action.remove["price"],
    };
  }

  if (action.type === "CLEAR_ALL") {
    return { order: [], price_sum: 0 };
  }
  return state;
}

const store = createStore(storeChanger);

export default store;
