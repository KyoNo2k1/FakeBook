import { makeStyles } from "@mui/styles";

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
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    marginLeft: "0 !important",
    height: "36px",
    alignItems: "center",
    marginTop: 15,
  },
  searchIcon: {
    paddingLeft: 8,
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
    padding: "8px 8px 8px 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${32}px)`,
    // transition: theme.transitions.create("width"),
    width: "100%",
  },
  listChat: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
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
