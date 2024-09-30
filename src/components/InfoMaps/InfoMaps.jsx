import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Maps from "./Maps/Maps";

const InfoMaps = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Container maxWidth="lg">
        <div className={classes.infoRow}>
          <div className={classes.infoColumn}>
            <div className={classes.textWrapper}>
              <Typography variant="h4" className={classes.text}>
                CONTACT
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: Riyadh, SA
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Phone number service:{" "}
                  <a href="tel:+966539941921">
                    <FaPhone /> +966539941921
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:a.hassan@simksa.com">
                    <MdEmail /> a.hassan@simksa.com
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  WhatsApp:{" "}
                  <a href="whatsapp://send?text=test&phone=+966539941921">
                    <FaWhatsapp /> WhatsApp{" "}
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Instgram:{" "}
                  <a
                     rel="noopener noreferrer"
                     href="https://www.instagram.com/sim79972?igsh=MTJ4MTBkbHpkcmQ1Yg%3D%3D&utm_source=qr"
                     target="__blank"
                     aria-label="Instagram"
                  >
                    <FaInstagram /> Instgram{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps/@24.6375302,46.8389709,12z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.button}>
                  <SiGooglemaps /> Get Directions
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.infoColumn}>
            <div className={classes.imgWrapper}>
              <Maps />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoMaps;
