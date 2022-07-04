import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  btnCss: {
    backgroundColor: "#98cbfb",
    cursor: "pointer",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
  chatBox: {
    width: "97%",
    height: "36px",
    margin: 10,
    display: "flex",
  },
  chatBoxIcon: {
    height: "100%",
    width: "18%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  inputChat: {
    flex: 1,
    // width: 100,
    margin: 1,
  },
  inputPlace: {
    padding: 10,
  },
}));
