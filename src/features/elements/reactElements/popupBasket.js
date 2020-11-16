import Popup from "reactjs-popup";
import React from "react";
import sendSQLData from "../metods/sendToServer";
import input_validation from "../metods/input_validation";
import store from "../store";

function ReturnBasketPopup() {
  return (
    <Popup
      trigger={<button className="btn btn-secondary"> Оформить </button>}
      modal
    >
      <div className="basket_popUp">
        <p className="h5 customer_name_heading">ФИО</p>
        <input className="customer_name"></input>
        <p className="form_name_feedback">В формате Иванов Иван Иванович</p>
        <p className="h5 customer_number_heading">Телефон</p>
        <input className="customer_number"></input>
        <p className="form_number_feedback">В формате 79*********</p>

        <button
          className="btn btn-secondary checkout_button"
          onClick={() => {
            let name = document.getElementsByClassName("customer_name")[0]
              .value;
            let number = document.getElementsByClassName("customer_number")[0]
              .value;
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
  );
}

export default ReturnBasketPopup;
