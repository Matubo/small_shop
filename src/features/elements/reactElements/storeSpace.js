import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";
import getSQLData from "../metods/responseToServer";
import cardDOM from "../metods/cardDOM";
import reserveCardsTemplate from "../../ifServerIsDown/templateForCards.js";

import "../../css/storeSpace.css";
import "../../css/popUpItem.css";

function createCardsDom(prodArr) {
  let cardsDOM = [];
  for (let i = 0; i < prodArr.length; i++) {
    cardsDOM.push(cardDOM(prodArr[i]));
  }
  return <div className="product_card_box">{cardsDOM}</div>;
}

function App() {
  let [cardsDOM, setCardsDOM] = useState("Server is offline");
  let [startId, setStartId] = useState(0);
  useEffect(() => {
    getSQLData(startId).then((resultData) => {
      if (resultData.status) {
        setCardsDOM(createCardsDom(resultData.data));
      } else {
        setCardsDOM(
          <div>
            <div>
              server is offline? status:{resultData.data}. A fallback template
              is used. Do not press buttons {"=>"} {"<="}
            </div>
            {createCardsDom(reserveCardsTemplate())}
          </div>
        );
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
              getSQLData(startId - 9).then((resultData) => {
                if (resultData.status) {
                  setStartId(startId - 9);
                  setCardsDOM(createCardsDom(resultData.data));
                  document.getElementById("prevButton").disabled = false;
                } else {
                  setCardsDOM(
                    <div>server if offline{resultData.data}</div>
                    //  setCardsDOM(createCardsDom())
                  );
                }
              });
            }
          }}
        >
          {"<="}
        </button>
        <button
          id="nextButton"
          className="btn btn-secondary"
          onClick={() => {
            document.getElementById("nextButton").disabled = true;
            getSQLData(startId + 9).then((resultData) => {
              if (resultData.status) {
                if (resultData.data.length > 1) {
                  setCardsDOM(createCardsDom(resultData.data));
                  setStartId(startId + 9);
                  document.getElementById("nextButton").disabled = false;
                } else {
                  document.getElementById("nextButton").disabled = false;
                }
              } else {
                setCardsDOM(<div>{resultData.data}</div>);
              }
            });
          }}
        >
          {"=>"}
        </button>
      </div>
    </div>
  );
}

export default App;
