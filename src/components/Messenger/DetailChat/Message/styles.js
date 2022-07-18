import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  chipChatUser: {
    padding: "5px 0px",
    display: "flex",
    flexDirection: "row-reverse",
  },
  chipChatGuest: {
    padding: "5px 0px",
    display: "flex",
  },
  chatMessage: {
    margin: "0 5px",
    padding: "5px 12px",
    maxWidth: "75%",
    wordWrap: "break-word",
    wordBreak: "break-word",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255,0.5)",
  },
}));
