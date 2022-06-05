import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone, FaFacebookMessenger } from "react-icons/fa";
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
                STORE
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: Name OF ST, Elmahala-Elkoubra, Gharbia, Egypt
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Phone number service:{" "}
                  <a href="tel:+201099383905">
                    <FaPhone /> +201099383905
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:mohamed.ahmed8412000@gmail.com">
                    <MdEmail /> mohamed.ahmed8412000@gmail.com
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  WhatsApp:{" "}
                  <a href="whatsapp://send?text=test&phone=+201099383905">
                    <FaWhatsapp /> WhatsApp{" "}
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Messenger:{" "}
                  <a
                    // href="https://www.messenger.com/t/110829101400998/?messaging_source%3Apages%message_shortlink"
                    href="https://www.messenger.com"
                    target="__blank"
                    aria-label="Messenger"
                    rel="noreferrer"
                  >
                    <FaFacebookMessenger /> Messenger{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps"
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
