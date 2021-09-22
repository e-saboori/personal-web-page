import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Logo from "./asset/Logo.png";
import Menu from "./asset/menu.svg";
import { useState } from "react";

const Toolbar = () => {
  const [navBarvisibility, setNavBarVisibility] = useState(false);
  const handelOnClick = () => {
    setNavBarVisibility(!navBarvisibility);
  };

  return (
    <header role="banner">
      <div className="toolbar">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <img className="menu" src={Menu} alt="Menu" onClick={handelOnClick} />

        {navBarvisibility === true ? (
          <NavigationBar handelOnClick={this.handelOnClick} />
        ) : null}
      </div>
    </header>
  );
};

export default Toolbar;
