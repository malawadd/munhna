import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {
  MunhnLogo,
  DisconnectIcon,
  WalletIcon,
} from "../../../assets/images/imageAssets";
import { chainList } from "../../../utils/constants";
import { formatWalletAddress } from "../../../utils/methods";
import { routes } from "../../../utils/routes";

import "./index.scss";

type Network = {
  name: string;
  className: string;
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { dashboard, portfolio, homepage } = routes;
  const { testnet } = chainList;



  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Disconnect Wallet",
      icon: <img src={DisconnectIcon} alt="Disconnect-wallet" />,
    },
  ];

  const network: Network = {
    name: "",
    className: "",
  };



  return (
    <div
      className={`header ${location.pathname === homepage ? "header-landing-page" : ""
        }`}
    >
      <div>
        <Link style={{ textDecoration: "none" }} to={homepage}>
          <img className="logo" src={MunhnLogo} alt="CurveX_Logo" />
        </Link>
      </div>
      <div className="nav-items">
        {location.pathname === homepage ? (
          <>
            <a href="https://docs.curvx.io/" target="blank" style={{ textDecoration: "none", color: "#ffffff" }} rel="noreferrer">Docs</a>
            <div>About</div>
            <div>
              <Link style={{ textDecoration: "none" }} to={dashboard}>
                <Button className="try-btn">Try the app</Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="nav-items">
            <div className="network">
              <div className={`dot ${network.className}`}></div>
              <p className="name">{network.name}</p>
            </div>
            {location.pathname === dashboard ? (
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to={portfolio}
              >
               
              </Link>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to={dashboard}
              >
                <div>Dashboard</div>
              </Link>
            )}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
