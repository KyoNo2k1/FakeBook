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
    backgroundColor: "#fff",
    margin: 10,
  },
}));
