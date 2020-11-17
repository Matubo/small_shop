import ReactDOM from "react-dom";
import React from "react";
import basket from "../store";
import Popup from "reactjs-popup";

function CardPopUp(prodData){

    return(
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
                backgroundImage: `url(/images/${prodData["img"]})`,
              }}
            ></div>
            <p className="popUp_name"> {prodData["name"]} </p>
            <p className="popUp_info"> {prodData["info"]} </p>
            <p className="popUp_price"> {prodData["price"]} руб.</p>

            <button
              type="button"
              className="btn btn-secondary card_btn"
              onClick={() => {
                basket.dispatch({ type: "ADD", added: prodData });
              }}
            >
              +
            </button>
          </div>
        </div>
      </Popup>
    )
}

export default CardPopUp