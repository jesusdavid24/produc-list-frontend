import { useState } from "react";
import PropTypes from 'prop-types';
import logo from '../../assets/svg/logo.svg'
import "./index.scss";

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
      <div className="header__container">
        <div className="header__container__logo" onClick={handlePage}>
          <img id="logo" src={logo}/>
          <h1 id="logo" className="header__container__logo__title">
            My Site
          </h1>
        </div>
        <div className="header__container__menu">
          <h2 className="header__container__menu__message">Get started</h2>
          <button onClick={handleMenu}>
            <i className="bi bi-list"></i>
          </button>
          {menu == true && (
            <nav>
              <button onClick={handleMenu}>
                <i className="bi bi-x"></i>
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
