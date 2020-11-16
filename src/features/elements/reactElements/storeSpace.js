import { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";
import getSQLData from "../metods/responseToServer";
import Popup from "reactjs-popup";
import basket from "../store";

import "../../css/storeSpace.css";
import "../../css/popUpItem.css";

function createCardsDom(prodArr) {
  let cardsDOM = [];
  for (let i = 0; i < prodArr.length; i++) {
    console.log(prodArr[i]["img"]);
    cardsDOM.push(
      <div className="card product_card">
        <div
          className="card_img"
          style={{
            backgroundImage: `url(/images/${prodArr[i]["img"]})`,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{prodArr[i]["name"]}</h5>
          <p className="card-text">{prodArr[i]["price"]} руб.</p>
          <button
            type="button"
            className="btn btn-secondary card_btn"
            onClick={() => {
              basket.dispatch({ type: "ADD", added: prodArr[i] });
            }}
          >
            +
          </button>
          <Popup
            trigger={
              <button className="btn btn-secondary card_btn"> i </button>
            }
            modal
          >
            <div className="popUp_body">
              <div className="popUp_flex">
                <div
                  className="popUp_img"
                  style={{
                    backgroundImage: `url(/images/${prodArr[i]["img"]})`,
                  }}
                ></div>
                <p className="popUp_name"> {prodArr[i]["name"]} </p>
                <p className="popUp_info"> {prodArr[i]["info"]} </p>
                <p className="popUp_price"> {prodArr[i]["price"]} руб.</p>

                <button
                  type="button"
                  className="btn btn-secondary card_btn"
                  onClick={() => {
                    basket.dispatch({ type: "ADD", added: prodArr[i] });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    );
  }

  console.log(cardsDOM);
  return <div className="product_card_box">{cardsDOM}</div>;
}

function App() {
  let [cardsDOM, setCardsDOM] = useState("empty");
  let [startId, setStartId] = useState(0);
  useEffect(() => {
    getSQLData(startId).then((res) => {
      if (res.status) {
        setCardsDOM(createCardsDom(res.data));
      } else {
        setCardsDOM(<div>{res.data}</div>);
      }
    });
  }, []);

  return (
    <div className="app">
      {cardsDOM}
      <div className="products_button_box">
        <button
          id="prevButton"
          className="btn btn-secondary"
          onClick={() => {
            if (startId > 8) {
              document.getElementById("prevButton").disabled = true;
              getSQLData(startId - 9).then((res) => {
                if (res.status) {
                  setStartId(startId - 9);
                  setCardsDOM(createCardsDom(res.data));
                  document.getElementById("prevButton").disabled = false;
                } else {
                  setCardsDOM(<div>{res.data}</div>);
                }
              });
            }
          }}
        >
          prev
        </button>
        <button
          id="nextButton"
          className="btn btn-secondary"
          onClick={() => {
            document.getElementById("nextButton").disabled = true;
            getSQLData(startId + 9).then((res) => {
              if (res.status) {
                if (res.data.length > 1) {
                  setCardsDOM(createCardsDom(res.data));
                  setStartId(startId + 9);
                  document.getElementById("nextButton").disabled = false;
                } else {
                  document.getElementById("nextButton").disabled = false;
                }
              } else {
                setCardsDOM(<div>{res.data}</div>);
              }
            });
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
