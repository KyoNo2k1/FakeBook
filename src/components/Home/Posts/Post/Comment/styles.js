import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  divider: {
    background: "#f50057",
  },
  commentHeader: {
    backgroundColor: "#efe4ff",
    display: "flex",
    padding: "3px 10px",
    position: "relative",
  },
  avatar: {
    backgroundColor: "blue",
    border: "1px solid",
    height: "30px",
    width: "30px",
  },
  commentBody: {
    display: "flex",
    backgroundColor: "#fddddd",
    padding: "3px 10px",
  },
  commentBodyImg: {
    height: "30px",
    width: "30px",
  },
  commentBodyInfo: {
    display: "block",
    marginLeft: "5px",
    maxWidth: "90%",
  },
  commentBodyInfoHeader: {
    borderRadius: "10px",
    backgroundColor: "#e0e0e0",
    padding: "5px 10px 7px",
  },
  commentBodyInfoName: {
    marginBottom: "10px",
    fontSize: "1rem",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  commentBodyInfoMessage: {
    paddingTop: "3px",
    wordWrap: "break-word",
    wordBreak: "break-word",
  },
  margin: {
    margin: 8,
  },
  commentHeaderInput: {
    position: "relative",
  },
  emojiCmt: {
    display: "inline-block",
    margin: "auto 2px",
    cursor: "pointer",
    color: "#3f51b5",
  },
  miniBtnCmt: {
    fontSize: "0.8rem",
    margin: "0 8px",
    cursor: "pointer",
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
