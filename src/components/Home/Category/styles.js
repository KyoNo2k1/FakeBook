import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  category: {
    height: "610px",
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#d1fffc",
  },
  categoryButton: {
    // marginTop: '0.5rem',
    height: "50px",
    justifyContent: "flex-start",
    backgroundColor: "d1fffc",
  },
  categoryImg: {
    height: "30px",
    width: "30px",
    margin: "0 1rem",
  },
  category2: {
    marginTop: "0.5rem",
    width: "100%",
    height: "60px",
    backgroundColor: "#d1fffc",
  },
  categoryRule: {
    float: "left",
    width: "150px",
    fontSize: "15px",
  },
  categoryHeading: {
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: "20px 20px 0 0",
    borderBottom: "3px solid",
  },
}));
