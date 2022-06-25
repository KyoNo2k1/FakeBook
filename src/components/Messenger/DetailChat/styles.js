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
}));
