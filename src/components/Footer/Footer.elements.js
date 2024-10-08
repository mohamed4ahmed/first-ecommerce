import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#191919",
    color: "#fff",
    fontSize: "19px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "2px solid rgb(218, 11, 11)",
  },
  footer__wrap: {
    margin: "5px auto",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  footer__logo: {
    height: "80px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",

    display: "flex",
    justifySelf: "flex-start",
    alignItems: "center",

    cursor: "pointer",
  },

  footer__logoImg: {
    height: "60px",
    border: 0,

    padding: "10px",

    display: "inline-block",
    verticalAlign: "middle",
    objectFit: "contain",
  },

  footer__center: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  footer__centerText: {
    "&:nth-child(2)": {
      marginLeft: "5px",
    },
  },

  footer__centerMo: {
    color: "#fff",

    "&:hover": {
      color: "#da0b0b",
    },
  },

  footer__right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },

  footer__rightLink: {
    cursor: "pointer",
    color: "#fff",
    fontSize: "32px",
    "&:nth-child(2)": {
      marginLeft: "15px",
    },
    "&:nth-child(3)": {
      marginLeft: "15px",
    },
    "&:hover": {
      color: "rgb(218, 11, 11)",
    },
  },
}));