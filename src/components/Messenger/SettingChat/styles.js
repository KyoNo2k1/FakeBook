import { makeStyles } from "@mui/styles";
const settingTopHeight = 236;
export default makeStyles((theme) => ({
  settingTop: {
    height: settingTopHeight,
    width: "100%",
  },
  avatar: {
    width: 80,
    height: 80,
    margin: "0 auto",
  },
  settingTopOption: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 50px",
  },
  settingTopOptionBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  settingMenu: {
    alignItems: "center",
    width: "100%",
    height: window.innerHeight - settingTopHeight - 80,
    overflowY: "auto",
  },
  button: {
    backgroundColor: "transparent",
    color: "#000",
    height: "40px",
    fontWeight: "bold",
  },
  settingMenuText: {
    fontWeight: "bold",
    justifyContent: "left",
  },
  settingMenuHover: {
    "&:hover": {
      backgroundColor: "#3eada2",
    },
  },
}));
