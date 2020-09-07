import { useState, useReducer, useEffect } from "react";
import React from "react";
import Basket from "./basket";
import '../../css/menu.css';
import basket_img from "../../img/shopping-bag.png";

function Menu() {
  
  useEffect(()=>{
    let trigger=document.getElementsByClassName('basket_trigger');
    let basket_elem=document.getElementsByClassName('basket_body');
    trigger[0].onmouseover = function(event) {
      console.log(1)
      basket_elem[0].style.cssText=
        'transform:scaleY(1)';
      /* event.target: внутренний элемент (всплыло) */
    };
    trigger[0].onmouseout = function(event) {
      console.log(2)
      basket_elem[0].style.cssText=
        'transform:scaleY(0)';
      /* event.target: внешний элемент */
    };
  })

  return (
    <div className='menu'>
      <div className='menu_item'>№1</div>
      <div className='menu_item'>№2</div>
      <div className='menu_item'>№3</div>
      <div className='menu_item basket_trigger'>
      <img className='basket_img' src={basket_img}/>
        <Basket/></div>
    </div>
  );
}

export default Menu;
