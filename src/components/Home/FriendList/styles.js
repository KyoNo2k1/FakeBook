import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent ",
    border: "2px solid #14fff0",
    borderRadius: "10px",
    paddingTop: 0,
  },
  friendListHeader: {
    display: "flex",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0 10px",
    borderBottom: "3px solid #f50057",
    borderRadius: "10px 10px 0 0",
  },
  headerIcon: {
    padding: "3px",
  },
  friendListInfo: {
    height: "640px",
    overflowX: "auto",
    display: "block",
    backgroundColor: "transparent",
  },
  listFriend: {
    display: "flex",
    backgroundColor: "#f9f2ed",
  },
  divider: {
    background: "#f50057",
  },
}));
