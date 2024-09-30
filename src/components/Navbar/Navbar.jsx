import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useStyles } from "./Navbar.elements";

import logoImg from "../../assets/img/logoMain.png";
import { AppBar, Container } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={classes.nav}>
          <AppBar position="fixed" style={{ background: "#fff" }}>
            <Container maxWidth="lg">
              <div className={classes.appBar}>
                <NavLink to="/" className={classes.nav__logo}>
                  <img
                    src={logoImg}
                    alt="logoImg"
                    className={classes.nav__logoImg}
                    onClick={closeMobileMenu}
                  />
                </NavLink>
                <div className={classes.nav__mobileIcon} onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul
                  className={classes.nav__menu}
                  onClick={handleClick}
                  style={{ left: `${click ? 0 : "-100%"}` }}
                >
                  <li className={classes.nav__item}>
                    <NavLink to="/" className={classes.nav__link}>
                      HomePage
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/products"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/blog"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/stores"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/membership"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Service&Support
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/about"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                     About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Container>
          </AppBar>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
