
import { googleFormsLink, socialLinks } from "../../../utils/constants";

import "./index.scss";

const Footer = () => {
  const { discard, twitter, linkedIn } = socialLinks;

  return (
    <div className="footer">
      <div className="container1">
        <div className="foo-sec1">
          <img className="footer-logo"  alt="Munhna_Logo" />
          <div className="foo-content">
            
          </div>
          
          <div className="copy-right">
            Copyright © 2023 <span style={{ color: "#000000" }}>MunHna</span>
          </div>
        </div>
        <div className="d-flex foo-sec2">
          <ul>
            <li className="title">Company</li>
            <li>About Us</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>
              <a rel="noreferrer" href={googleFormsLink} target="_blank">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
