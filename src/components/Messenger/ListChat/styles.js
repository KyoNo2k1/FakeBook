import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  btnCss: {
    backgroundColor: "#98cbfb",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: "0 !important",
    height: "36px",
    alignItems: "center",
    marginTop: 15,
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  listChat: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
  },
  listChatItem: {
    paddingRight: 0,
  },
  chatName: {
    fontWeight: "bold",
  },
  chatTitle1: {
    fontSize: "14px",
  },
  chatTitle2: {
    fontSize: "13px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  chatTime: {
    fontSize: "10px",
    width: "55px",
  },
  listItemAvatarRoot: {
    width: "50px",
    height: "50px",
    marginRight: 5,
  },
}));
