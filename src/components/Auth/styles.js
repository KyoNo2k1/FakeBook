import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  iconFb: {
    width: "100px !important",
    height: "100px",
  },
  paper: {
    display: "flex",
    width: "350px",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 8,
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 24,
  },
  submit: {
    marginTop: 12,
    fontWeight: "bold",
    height: "40px",
    alignItems: "center",
  },
  googleButton: {
    marginBottom: 16,
  },
  divider: {
    background: "#f50057",
  },
  switchMode: {
    padding: 8,
    background: "#42b72a",
    margin: 0,
    color: "white",
  },
}));
