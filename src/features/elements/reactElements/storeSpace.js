import { useState, useReducer, useEffect } from "react";
import React from "react";
import getSQLData from "../metods/responseToServer";
import basket from "../store";
import "../../css/storeSpace.css";

function createCardsDom(prodArr) {
  let cardsDOM = [];
  for (let i = 0; i < prodArr.length; i++) {
    console.log(prodArr[i]["img"]);
    cardsDOM.push(
      <div className="card product_card">
        <div
          className="card_img"
          style={{
            backgroundImage: `url(http://localhost:3005/images/${prodArr[i]["img"]})`,
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
    getSQLData(startId).then((res) => setCardsDOM(createCardsDom(res)));
  }, []);

  return (
    //<DeleteFromApp/>
    <div className="app">
      {cardsDOM}
      <button
        id="prevButton"
        onClick={() => {
          if (startId > 5) {
            document.getElementById("prevButton").disabled = true;
            getSQLData(startId - 6).then((res) => {
              setStartId(startId - 6);
              setCardsDOM(createCardsDom(res));
              document.getElementById("prevButton").disabled = false;
            });
          }
        }}
      >
        prev
      </button>
      <button
        id="nextButton"
        onClick={() => {
          document.getElementById("nextButton").disabled = true;
          getSQLData(startId + 6).then((res) => {
            if (res.length > 1) {
              setCardsDOM(createCardsDom(res));
              setStartId(startId + 6);
              document.getElementById("nextButton").disabled = false;
            } else {
              document.getElementById("nextButton").disabled = false;
            }
          });
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
