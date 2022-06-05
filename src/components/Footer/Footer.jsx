import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <div className={classes.info}>
            <Typography variant="h6" className={classes.subTitle}>
              Location :{" "}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglemaps /> Get Directions
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              Phone :{" "}
              <a href="tel:+201099383905">
                <FaPhone /> +201099383905
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              Email :{" "}
              <a href="mailto:mohamed.ahmed8412000@gmail.com">
                <GrMail /> mohamed.ahmed8412000@gmail.com
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              مواعيد العمل : من 10 صباحآ الي 10 مساء طوال الاسبوع
            </Typography>

            <ul className={classes.nav__menu}>
              <li className={classes.nav__item}>
                <NavLink
                  to="/products"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  مـنـتـجـاتـنا
                </NavLink>
              </li>

              <li className={classes.nav__item}>
                <NavLink
                  to="/blog"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  أحـدث الأخـبـار
                </NavLink>
              </li>

              <li className={classes.nav__item}>
                <NavLink
                  to="/membership"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  تـسـجـيـل عـضـويه
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/" className={classes.footer__logo}>
            <img
              src={logoImg}
              alt="logoImg"
              className={classes.footer__logoImg}
            />
          </NavLink>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              Frist Ecommmerce  @ 2022.
            </div>
            <div className={classes.footer__centerText}>
              Made with ♥ by:{" "}
              <a
                href="https://www.mohamedahmed.ml"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerMo}
              >
                Mohamed Ahmed
              </a>
            </div>
          </div>
          <div className={classes.footer__right}>
            <a
              className={classes.footer__rightLink}
              href="https://www.facebook.com"
              target="__blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={classes.footer__rightLink}
              href="https://www.instagram.com"
              target="__blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={classes.footer__rightLink}
              href="whatsapp://send?text=order-from-website&phone=+201099383905"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
