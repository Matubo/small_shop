import { useEffect } from "react";
import React from "react";
import Basket from "./basket";
import "../../css/menu.css";
import basket_img from "../../img/shopping-bag.png";

function About() {
  return (
    <div className="about_flex column_flex">
      <div>
        <p>лучший</p>
        <h4>МАГАЗИН ХРЕНИ</h4>
        <p>во вселенной</p>
        <p>
          Мы продаем странные игрушки, ваших друзей и наших ****** клиентов.
        </p>
      </div>
      <div className="social_network_flex">
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/instagram.png)`,
            }}
          ></div>
          <p>ybei_skyky</p>
        </div>
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/vk.png)`,
            }}
          ></div>
          <p>убей скуку</p>
        </div>
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/facebook.png)`,
            }}
          ></div>
          <p>ybei_skyky</p>
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h4>КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
      <div className="about_flex">
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/landline.png)`,
            }}
          ></div>
          <p>+7-999-777-77-77</p>
        </div>
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/email.png)`,
            }}
          ></div>
          <p>support@ybeiskyky.com</p>
        </div>
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/home.png)`,
            }}
          ></div>
          <p>СПБ Наб. Обводного канала</p>
          <p>д. 1055 оф. 26 </p>
        </div>
        <div className="social_network_card">
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(/images/icon/time.png)`,
            }}
          ></div>
          <p>Каждый день</p>
          <p>10.00 - 18.00</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  useEffect(() => {
    let trigger = document.getElementsByClassName("transform_trigger");
    let body = document.getElementsByClassName("transform_body");
    let map = document.querySelector("iframe");
    for (let i = 0; i < trigger.length; i++) {
      trigger[i].onmouseover = function (event) {
        console.log(1);
        body[i].style.cssText = "transform:scaleY(1)";
      };
      trigger[i].onmouseout = function (event) {
        console.log(2);
        body[i].style.cssText = "transform:scaleY(0)";
      };
    }
  });

  return (
    <div>
      <div className="menu_ident"></div>
      <div className="menu">
        <div className="menu_item logo_box">
          <img className="menu_logo" src="/images/logo/logo.png"></img>
        </div>
        <div className="menu_item transform_trigger">
          <div className="menu_text_box">
            <h5 className="menu_heading_text">О нас</h5>
          </div>
          <div className="transform_body about_box">
            <About />
          </div>
        </div>
        <div className="menu_item transform_trigger">
          <div className="menu_text_box">
            <h5 className="menu_heading_text">Контакты</h5>
          </div>
          <div className="transform_body about_box">
            <Contacts />
          </div>
        </div>
        <div className="menu_item transform_trigger">
          <img className="basket_img" src={basket_img} />
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default Menu;
