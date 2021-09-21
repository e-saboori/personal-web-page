import { useState } from "react";
import { Link } from "react-router-dom";
import Close from "../asset/close.svg";

const NavigationBar = (props) => {
  return (
    <nav className="navigation">
      <img
        className="close"
        src={Close}
        alt="Close"
        onClick={this.props.handelOnClick}
      />
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Information
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Game
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Art
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
