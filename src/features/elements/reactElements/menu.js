import { useEffect } from "react";
import React from "react";
import Basket from "./basket";
import "../../css/menu.css";
import basket_img from "../../img/shopping-bag.png";
import instagram_img from "../../img/instagram.png";
import vk_img from "../../img/vk.png";
import facebook_img from "../../img/facebook.png";
import landline_img from "../../img/landline.png";
import home_img from "../../img/home.png";
import time_img from "../../img/time.png";
import email_img from "../../img/email.png";
import logo_img from "../../img/logo/logo.png";

function About() {
  return (
    <div className="about_flex column_flex">
      <div>
        <h4 className="about_title">МЫ МАГАЗИН ЗАБАВНЫХ ИГРУШЕК</h4>
        <p>
          Мы продаем смешные мягкие игрушки<br></br>
          Это идеальный подарок<br></br>
          Они изготовлены из гипоаллергенных материалов<br></br>
          Имеют антистресс эффект
        </p>
      </div>
      <h4 className="about_title">Наши соц сети</h4>
      <div className="social_network_flex">
        <div className="social_network_card">
          <h6>Instagram</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${instagram_img})`,
            }}
          ></div>
          <p>net_skyke</p>
        </div>
        <div className="social_network_card">
          <h6>Вконтакте</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${vk_img})`,
            }}
          ></div>
          <p>нет_скуке</p>
        </div>
        <div className="social_network_card">
          <h6>Facebook</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${facebook_img})`,
            }}
          ></div>
          <p>net_skyke</p>
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h4 className="about_title">НАША КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
      <div className="about_flex">
        <div className="social_network_card">
          <h6>Телефон</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${landline_img})`,
            }}
          ></div>
          <p>+7-999-777-77-77</p>
        </div>
        <div className="social_network_card">
          <h6>E-mail</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${email_img})`,
            }}
          ></div>
          <p>support@netskyke.com</p>
        </div>
        <div className="social_network_card">
          <h6>Адрес</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${home_img})`,
            }}
          ></div>
          <p>СПБ Наб. Обводного канала</p>
          <p>д. 1055 оф. 26 </p>
        </div>
        <div className="social_network_card">
          <h6>Режим работы</h6>
          <div
            className="social_network_icon"
            style={{
              backgroundImage: `url(${time_img})`,
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
        body[i].style.cssText = "transform:scaleY(1)";
      };
      trigger[i].onmouseout = function (event) {
        body[i].style.cssText = "transform:scaleY(0)";
      };
    }
  });

  return (
    <div>
      <div className="menu_ident"></div>
      <div className="menu">
        <div className="menu_item logo_box">
          <img className="menu_logo" src={logo_img}></img>
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
