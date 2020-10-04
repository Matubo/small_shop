import { useState, useReducer, useEffect } from "react";
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
      <div className="map_box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.1328579568744!2d30.330041115829804!3d59.91334238186698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963051690b4d6f%3A0xc856e39dc0512ae5!2z0L3QsNCx0LXRgNC10LbQvdCw0Y8g0J7QsdCy0L7QtNC90L7Qs9C-INC60LDQvdCw0LvQsCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1600603698608!5m2!1sru!2sru"
          style={{
            width: "600",
            height: "450",
            border: "0",
          }}
        ></iframe>
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
        if (i == 1) {
          map.style.cssText = "height: 150px;width: 250px";
        }
        /* event.target: внутренний элемент (всплыло) */
      };
      trigger[i].onmouseout = function (event) {
        console.log(2);
        body[i].style.cssText = "transform:scaleY(0)";
        if (i == 1) {
          map.style.cssText = "height: 0;width: 0";
        }
        /* event.target: внешний элемент */
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
