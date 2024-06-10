import { useState } from "react";
import PropTypes from 'prop-types';
import logo from '../../assets/svg/logo.svg'
import "./header.scss";

const Header = ({ handleViewPage }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handlePage = (event) => {
    const id = event.target.id;
    setMenu(!menu);

    id == "productsPage" && handleViewPage("products");
    id == "contactPage" && handleViewPage("contact");
    id == "logo" && (handleViewPage("products"), setMenu(false));
  };

  return (
    <header className="header">
      <div className="pe-5 d-flex justify-content-between w-100 p-1">
        <div className="logo-container" onClick={handlePage}>
          <img id="logo" src={logo} className="header__logo" />
          <h1 id="logo" className="header__title mt-2">
            My Site
          </h1>
        </div>
        <div className="menu-container">
          <h2 className="header__message">Get started</h2>
          <button className="header__open-menu" onClick={handleMenu}>
            <i className="bi bi-list"></i>
          </button>
          {menu == true && (
            <nav className="header__menu">
              <button className="header__close-menu" onClick={handleMenu}>
                <i className="bi bi-x x-button"></i>
              </button>
              <ul>
                <li id="productsPage" onClick={handlePage}>
                  Products
                </li>
                <li id="contactPage" onClick={handlePage}>
                  Contact
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  handleViewPage: PropTypes.func.isRequired, 
  children: PropTypes.node 
};

export default Header;
