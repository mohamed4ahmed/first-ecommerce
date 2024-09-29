import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Typography,
  TextField,
  Button,
  Modal,
} from "@material-ui/core";
import { useStyles } from "./Membership.elements";
import { IoCloseCircleOutline } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { firebaseInit } from "../../firebase";
import { getUUID } from "../../utils";

import membershipImg from "../../assets/img/membership.svg";
import { SpinnerBook } from "../../components";

const Membership = () => {
  const classes = useStyles();
  const [spinner, setSpinner] = useState(true);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  // const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  useEffect(() => {
    if ((name !== "") & (dob !== "") & (phoneNumber !== "")) {
      setDisabledButton(false);
    }
  }, [name, dob, phoneNumber, disabledButton]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setModal(true);
    }, 500);

    firebaseInit
      .firestore()
      .collection("members")
      .add({
        id: getUUID(),
        phoneNumber: phoneNumber,
        name: name,
        emailAddress: email,
        dob: dob,
      })
      .then()
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const handleFeedbackContinueButton = () => {
    setModal(false);
    setDisabledButton(true);
    setName("");
    setDob("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className={classes.membership}>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <Modal
            open={modal}
            onClose={() => {
              setModal(false);
              setDisabledButton(true);
              setName("");
              setDob("");
              setPhoneNumber("");
              setEmail("");
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <Container maxWidth="lg" className={classes.modalComponent}>
              <span className={classes.icon} onClick={() => setModal(false)}>
                <IoCloseCircleOutline />
              </span>
              <Typography
                variant="h4"
                className={`${classes.headerText} ${classes.headerTextModal}`}
              >
                Simksa
              </Typography>
              <p className={classes.description}>
              Your request has been send successfully. We will contact you as soon as possible. Thank you              </p>
              <div className={classes.buttonGroup}>
                <Link to="/">
                  <Button variant="contained" className={classes.button}>
                  Go to the HomePage
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  className={`${classes.button} ${classes.secondButtonModal}`}
                  onClick={handleFeedbackContinueButton}
                >
                  Continue requesting
                </Button>
              </div>
            </Container>
          </Modal>
          <Container maxWidth="lg" className={classes.container}>
            <div className={classes.row}>
              <div className={classes.column}>
                <div className={classes.textWrapper}>
                  <Typography variant="h4" className={classes.headerText}>
                  Your order
                  </Typography>
                  <p className={classes.description}>
                  Please share the information with Simksa</p>
                  <p id="category" className={classes.label}>
                     Name : (*)
                  </p>
                  <TextField
                    id="outlined-basic1"
                    variant="outlined"
                    placeholder={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <p id="category" className={classes.label}>
                   The date your request was received :(*)
                  </p>
                  <TextField
                    id="outlined-basic2"
                    variant="outlined"
                    placeholder={dob}
                    type="date"
                    onChange={(event) => setDob(event.target.value)}
                  />

                  <p id="category" className={classes.label}>
                    Email : (*)
                  </p>
                  <TextField
                    id="outlined-basic3"
                    variant="outlined"
                    placeholder={email}
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <p id="category" className={classes.label}>
                    Phone number : (*)
                  </p>
                  <TextField
                    id="outlined-basic4"
                    variant="outlined"
                    placeholder={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleSubmit}
                    disabled={disabledButton ? true : false}
                  >
                    Confirm request
                  </Button>
                  {error && (
                    <p className={`${classes.label} ${classes.error}`}>
                      Error: Please enter text in: {error}
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.column}>
                <div className={classes.imgWrapper}>
                  <LazyLoadImage
                    src={membershipImg}
                    alt="img"
                    className={classes.img}
                    effect="blur"
                  />
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Membership;
