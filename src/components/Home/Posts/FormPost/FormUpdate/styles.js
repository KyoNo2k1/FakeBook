import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: 8,
    },
  },
  paper: {
    padding: 16,
    width: "30%",
    position: "sticky",
    margin: "auto",
    marginTop: 200,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "",
  },
  divider: {
    background: "#f50057",
  },
}));
