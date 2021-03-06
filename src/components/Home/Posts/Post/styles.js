import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    marginBottom: 5,
    objectFit: "contain",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: "#e0e0e0",
  },
  cardHeaderName: {
    fontSize: "1rem",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cardContent: {
    paddingTop: "0px",
  },
  avatar: {
    backgroundColor: "blue",
    border: "1px solid",
  },
  divider: {
    background: "#f50057",
  },
  iconPost: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      color: "#00ada6",
      cursor: "pointer",
    },
  },
  animatedItem: {
    animation: `$myEffect 1000ms easing`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms easing`,
    opacity: 0,
    transform: "translateY(-100%)",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-50%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-50%)",
    },
  },
  commentSpace: {
    borderRadius: "0 0 15px 15px",
    // overflow: "hidden"
  },
  settingPost: {
    display: "block",
    backgroundColor: "#dddddd",
    borderRadius: "10px",
  },
  settingPostBtn: {
    fontWeight: "500",
    padding: "8px 10px",
  },
}));
