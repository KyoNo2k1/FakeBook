import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: "0 12px",
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    marginLeft: "0 !important",
    height: "36px",
    alignItems: "center",
  },
  toolbarNav: {
    width: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  leftLocation: {
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  },
  searchIcon: {
    color: "#ccc",
    paddingLeft: 12,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "blue",
  },
  inputInput: {
    padding: "8px 8px 8px 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${32}px)`,
    // transition: theme.transitions.create("width"),
    width: "100%",
    fontStyle: "bold",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  profile: {
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    padding: "5px 15px 5px 5px",
    marginBottom: "3px",
    height: "50%",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#afbbff",
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "auto",
    //   marginTop: 20,
    //   justifyContent: "center",
    // },
  },
  small: {
    width: 32,
    height: 32,
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1em",
    paddingLeft: "7px",
    zIndex: 1,
    fontWeight: "bold",
  },
  middleLocation: {
    display: "flex",
    justifyContent: "center",
  },
  middleIcon: {
    padding: "12px 40px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#afbbff",
    },
    borderRadius: "10px 10px 0 0px",
    position: "relative",
  },
  colorTab: {
    color: "#fff",
  },
  selectedTab: {
    color: "#92fff8",
  },
  indicatorColor: {
    backgroundColor: "#92fff8",
  },
  rightLocation: {
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  },
  rightLocationIcon: {
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 8px 8px 0",
    display: "flex",
  },
  navIcon: {
    width: 40,
    height: 40,
    cursor: "pointer",
    borderRadius: "45px",
    backgroundColor: "#6b82ff",
    margin: "0 3px",
    "&:hover": {
      backgroundColor: "#afbbff",
    },
    "&:active": {
      backgroundColor: "#94c2ff",
      opacity: "0.5",
    },
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightLocationIconCss: {
    width: 25,
    height: 25,
  },
  notiCount: {
    position: "absolute",
    top: 0,
    left: 32,
    width: 20,
    height: 20,
    backgroundColor: "red",
    fontSize: "1.2rem",
    textAlign: "center",
    borderRadius: "45%",
  },
  line: {
    height: "5px",
    width: "116px",
    position: "absolute",
    backgroundColor: "#94c2ff",
    bottom: 0,
  },
  listMenu: {
    background: "#3f51b5",
  },
  divider: {
    background: "#f50057",
  },
  rightIconClick: {
    position: "relative",
  },
}));
