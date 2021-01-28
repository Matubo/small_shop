import { useState } from "react";
import React from "react";
import store from "../store";
import BasketCheckoutPopupButton from "../metods/popupBasket";
import "../../css/basket.css";
import trash_img from "../../img/trash.png";

function createBasketDOM(basket, sum) {
  if (basket.length === 0) {
    localStorage.removeItem("localOrderArray");
    return <div>Пусто</div>;
  }
  let DOM = [];
  for (let i = 0; i < basket.length; i++) {
    DOM.push(
      <tr>
        <td>
          <div
            className="basket_miniature"
            style={{
              backgroundImage: `url(${basket[i]["img"]})`,
            }}
          ></div>
        </td>
        <td>{basket[i]["name"]}</td>
        <td>{basket[i]["price"]} руб.</td>
        <td>{basket[i]["count"]} шт.</td>
        <td>
          <button
            className="btn btn-light basket_button_trash"
            style={{
              backgroundImage: `url(${trash_img})`,
            }}
            onClick={() => {
              store.dispatch({ type: "REMOVE", remove: basket[i] });
            }}
          ></button>
        </td>
      </tr>
    );
  }
  return (
    <div className="basket">
      <div className="table_box">
        <table className="table table_body">{DOM}</table>
      </div>
      <div className="undertable_box">
        <p>Сумма заказа: {sum}руб.</p>
        <div className="basket_button_flex">
          <button
            className="btn btn-secondary clear_button"
            onClick={() => {
              store.dispatch({ type: "CLEAR_ALL" });
              
            }}
          >
            Очистить
          </button>
          <BasketCheckoutPopupButton></BasketCheckoutPopupButton>
        </div>
      </div>
    </div>
  );
}

function Basket() {
  let [basketDOM, setBasketDOM] = useState(<div>Пусто</div>);

  store.subscribe(() => {
    let [orderArr, orderSum] = [
      store.getState()["order"],
      store.getState()["price_sum"],
    ];
    let newBasketDOM = createBasketDOM(orderArr, orderSum);
    setBasketDOM(newBasketDOM);
  });

  return <div className="basket_body transform_body">{basketDOM}</div>;
}

export default Basket;
