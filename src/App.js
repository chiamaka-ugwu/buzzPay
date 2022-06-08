import React, { useState } from "react";
import './index.css';
import logo from "./images/logo.png";
import hero from "./images/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
        {modal == true && (
        <section id="modal-background" class="modal">
          <div className="box">
            <FontAwesomeIcon
              className="fa-solid"
              id="close"
              icon={faXmark}
              onClick={() => {
                setModal(false);
              }}
            />
            <h1>Get Notified When we Launch🚀</h1>
            <form method="POST" name="BuzzPay" data-netlify="true">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email Address"
              />
              <input type="submit" value="Notify Me" className="submit" />
            </form>
            <p>*Dont worry, we will not spam you.</p>
          </div>
        </section>
      )}

      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <FontAwesomeIcon className="fa-solid" icon={faBars}  onClick={() => {setModal(true);}}/>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setModal(true);
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setModal(true);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setModal(true);
              }}
            >
              Partnership
            </a>
          </li>
        </ul>
      </nav>

      <section id="hero">
        <div className="left">
          <div className="text">
            <h5>coming soon 🚀🚀🚀</h5>
            <h1>Get Notified</h1>
            <h1> When we Launch🚀</h1>
            <form method="POST" name="BuzzPay" data-netlify="true">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email Address"
              />
              <input type="submit" value="Notify Me" className="submit" />
            </form>
            <p>*Dont worry, we will not spam you.</p>
            <aside>
              <div className="box">
                <FontAwesomeIcon className="fa-solid" icon={faBoltLightning} />
                <p style={{ color: "white" }}>Make Fast Payment</p>
              </div>
              <div className="box">
                <FontAwesomeIcon
                  className="fa-solid"
                  icon={faMobileScreenButton}
                />
                <p style={{ color: "white" }}>Turn Your Mobile Phone to POS</p>
              </div>
              <div className="box">
                <FontAwesomeIcon className="fa-regular" icon={faMoneyBill1} />
                <p style={{ color: "white" }}>Collect Cash Without Delays</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="hero" />
        </div>
      </section>

      <footer>
            <div className="socials">
                <FontAwesomeIcon className="fa-brand" icon={faInstagram} />
                <FontAwesomeIcon className="fa-brand" icon={faFacebookF} />
                <FontAwesomeIcon className="fa-brand" icon={faTwitter} />
            </div>
        <ul>
          <li>
            <a href="#" onClick={() => {setModal(true);}}>FAQ</a>
          </li>
          <li>
            <a href="#" onClick={() => {setModal(true);}}>Privacy policy</a>
          </li>
          <li>
            <a href="#" onClick={() => {setModal(true);}}>Email us</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
