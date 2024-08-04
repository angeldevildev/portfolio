import React from "react";
import "./Footer.css";
import Image from "next/image";
import buyMeACoffee from './bmc-logo-yellow.png';
import buyMeACoffeeNoBackground from './bmc-logo-no-background.png';
import BuyMeACoffee from '../BuyMeACoffee/BuyMeACoffee';
import LinkedIn from '../LinkedIn/LinkedIn';
import Email from '../Email/Email';
import GitHub from '../GitHub/GitHub';

function Footer() {
  return (
    <div className="footer">
      <span>© 2024 Angelo Broggian</span>
      <div className="footer-social">
        <LinkedIn />
        <Email />
        <GitHub />
        <BuyMeACoffee />
      </div>
    </div>
  );
}

export default Footer;
