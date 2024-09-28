import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg_blog_home.webp";
export const useStyles = makeStyles((theme) => ({
  info: {
    color: "black",
    padding: "50px 0",
    background: `url(${bgImg}) no-repeat left top, #191919`,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoRow: {
    alignItems: "center",

    display: "flex",
    flexWrap: "wrap",
  },

  infoColumn: {
    maxWidth: "50%",
    marginBottom: "15px",
    padding: "0 15px",

    flex: "1",
    flexBasis: "50%",

    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",

      display: "flex",
      justifyContent: "center",
      flexBasis: "100%",
    },
  },

  imgWrapper: {
    minWidth: "300px",
    maxWidth: "555px",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
  },

  textWrapper: {
    height: "auto",
    display: "grid",
    gridGap: "4rem",
    gridTemplateColumns: "repeat(1, 1fr)",

    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      gridGap: "3rem",
    },
  },
  text: {
    color: "rgb(218, 11, 11)",
    fontWeight: 600,
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      width: "150px",
      border: "2px solid rgb(218, 11, 11)",
    },
  },
  subTitle: {
    color: "white",
    padding: "10px 0",
    [theme.breakpoints.down("md")]: {
      padding: "5px 0",
    },
    "& a": {
      color: "rgb(218, 11, 11)",
      cursor: "pointer",
    },
  },
  button: {
    borderRadius: "20px",
    fontSize: "20px",
    background: "rgb(218, 11, 10)",
    color: "black",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      background: "rgb(218, 11, 9)",
      color: "white",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
