import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  recentPosts: {
    position: "sticky",
    top: "90px",
    left: "0px",

    minHeight: "1px",

    [theme.breakpoints.down("md")]: {},
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "50px",
  },
  headerText: {
    color: "black",
    fontWeight: 600,
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      width: "70%",
      border: "2px solid rgb(218, 11, 11)",
    },
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "50px 0 20px 0",
  },
  post: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    color: "black",

    "&:hover p": {
      color: "rgb(218, 11, 10)",
    },
  },
  postImg: {
    width: "25%",
  },
  img: {
    width: "95px",
    height: "95px",
    border: "none",
    display: "inline-block",
    verticalAlign: "middle",
    borderRadius: "10px",
    objectFit: "cover",
  },

  content: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "10px",
  },
  title: {
    fontSize: "24px",
    textTransform: "uppercase",
    fontWeight: "600",
    height: "53px",
    lineHeight: "26px",
    overflow: "hidden",
    display: "block",
    // eslint-disable-next-line
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
  },
  date: {
    fontSize: "20px",
  },

  socialLink: {
    color: "black",
    fontSize: "50px",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    cursor: "pointer",

    "&:nth-child(2)": {
      marginLeft: "15px",
    },
  },
  facebook: {
    color: "black",
    "&:hover": {
      color: "rgb(218, 11, 10)",
    },
  },
  instagram: {
    color: "#black",
    "&:hover": {
      color: "#da0b0b",
    },
  },
}));
