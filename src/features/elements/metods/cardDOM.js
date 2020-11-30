import ReactDOM from "react-dom";
import React from "react";
import basket from "../store";
import CardPopUp from "../metods/cardDOMPopup";

function CardDOM(prodData) {
  return (
    <div className="card product_card">
      <div
        className="card_img"
        style={{
          backgroundImage: `url(/images/${prodData["img"]})`,
        }}
      ></div>
      <div className="card-body">
        <div className="card-bottom-flex">
          <div className="card-text">
            <h5 className="card-title">{prodData["name"]}</h5>
            <p className="card-price">{prodData["price"]} руб.</p>
          </div>
          <button
            type="button"
            className="btn btn-secondary card_btn"
            onClick={() => {
              basket.dispatch({ type: "ADD", added: prodData });
            }}
          >
            +
          </button>
          {CardPopUp(prodData)}
        </div>
      </div>
    </div>
  );
}
export default CardDOM;
