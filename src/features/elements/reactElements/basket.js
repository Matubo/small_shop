import { useState, useReducer, useEffect } from "react";
import React from "react";
import Popup from "reactjs-popup";
import store from "../store";
import sendSQLData from "../metods/sendToServer";
import input_validation from "../metods/input_validation";
import "../../css/basket.css";

function createBasketDOM(basket, sum) {
  if (basket.length == 0) {
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
              backgroundImage: `url(http://localhost:3005/images/${basket[i]["img"]})`,
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
              backgroundImage: `url(http://localhost:3005/images/icon/trash.png)`,
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
        <table className="table">{DOM}</table>
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
          {/* //!---------------- */}
          <Popup
            trigger={<button className="btn btn-secondary"> Оформить </button>}
            modal
          >
            <div className="basket_popUp">
              <p className="h5 customer_name_heading">ФИО</p>
              <input className="customer_name"></input>
              <p className="form_name_feedback">
                В формате Иванов Иван Иванович
              </p>
              <p className="h5 customer_number_heading">Телефон</p>
              <input className="customer_number"></input>
              <p className="form_number_feedback">В формате 79*********</p>

              <button
                className="btn btn-secondary checkout_button"
                onClick={() => {
                  let name = document.getElementsByClassName("customer_name")[0]
                    .value;
                  let number = document.getElementsByClassName(
                    "customer_number"
                  )[0].value;
                  let data_feedback = input_validation(name, number); //отправляем данные на проверку, возвращается в виде объекта с ответом и //!отформатированными данными
                  if (!data_feedback.flag) {
                    document.getElementsByClassName(
                      "form_name_feedback"
                    )[0].innerHTML = data_feedback.name.message;
                    document.getElementsByClassName(
                      "form_number_feedback"
                    )[0].innerHTML = data_feedback.number.message;
                  } else {
                    sendSQLData(
                      data_feedback.name.data,
                      data_feedback.number.data,
                      store.getState()
                    );
                    store.dispatch({ type: "CLEAR_ALL" });
                  }
                }}
              >
                Оформить
              </button>
            </div>
          </Popup>
        </div>
      </div>
      {/* //!---------------- */}
    </div>
  );
}

function Basket() {
  let [basketDOM, setBasketDOM] = useState(<div>Пусто</div>);

  store.subscribe(() => {
    let [order_arr, order_sum] = [
      store.getState()["order"],
      store.getState()["price_sum"],
    ];
    let newBasketDOM = createBasketDOM(order_arr, order_sum);
    setBasketDOM(newBasketDOM);
  });

  return <div className="basket_body transform_body">{basketDOM}</div>;
}

export default Basket;
