import {
  AppBar,
  Icon,
  IconButton,
  InputBase,
  Toolbar,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowDown } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";

import userImg from "../../images/avatar.png";
import useStyles from "./styles";

import { logout } from "../redux/reducerSlice/userSlice";

export default function Navbar({ user }) {
  const classes = useStyles();
  const [leftLine, setleftLine] = useState(528);
  const [activeIcon, setActiveIcon] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const middleIconLink = ["/home", "/watch", "/group", "/game"];

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const [valueTabs, setValueTabs] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    try {
      dispatch(logout(JSON.parse(localStorage.getItem("profile"))?.data?.uid));
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setAnchorEl(null);
      navigate("../login");
    }, 100);
  };

  const CustomizedTab = styled(Tab)`
    color: #fff;

    :hover {
      color: #2e8b57;
    }

    &.Mui-selected {
      color: #92fff8;
    }
  `;

  if (user)
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar className={classes.toolbarNav}>
            <Box className={classes.leftLocation}>
              <Link to="/">
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <svg
                    color="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4" />
                      <stop offset="1" stop-color="#4eff22" />
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      fill="#ff2aee"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    />
                  </svg>
                </IconButton>
              </Link>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…....."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Box>

            <Box className={classes.middleLocation} id="boxIcon">
              <Tabs
                value={valueTabs}
                onChange={handleChangeTabs}
                aria-label="icon tabs example"
                classes={{ indicator: classes.indicatorColor }}
              >
                <CustomizedTab
                  component="a"
                  icon={<HomeIcon sx={{ fontSize: "40px" }} />}
                  aria-label="home"
                  onClick={() => navigate("/home")}
                />
                <CustomizedTab
                  component="a"
                  icon={<LiveTvIcon sx={{ fontSize: "40px" }} />}
                  aria-label="watch"
                  onClick={() => navigate("/watch")}
                />
                <CustomizedTab
                  component="a"
                  icon={<GroupsIcon sx={{ fontSize: "40px" }} />}
                  aria-label="group"
                  onClick={() => navigate("/group")}
                />
                <CustomizedTab
                  component="a"
                  icon={<SportsEsportsIcon sx={{ fontSize: "40px" }} />}
                  aria-label="game"
                  onClick={() => navigate("/game")}
                />
              </Tabs>
            </Box>

            <Box className={classes.rightLocation}>
              <div className={classes.profile}>
                <Avatar alt="Nghia" src={userImg} className={classes.small} />
                <Typography className={classes.userName} variant="h6">
                  Nghia
                </Typography>
              </div>
              <div className={classes.rightLocationIcon}>
                <Icon classes={{ root: classes.navIcon }}>
                  <CgMenuGridO className={classes.rightLocationIconCss} />
                </Icon>
                <Icon
                  classes={{ root: classes.navIcon }}
                  onClick={() => navigate("./messenger")}
                >
                  <RiMessengerFill className={classes.rightLocationIconCss} />
                  {
                    // <div className={classes.notiCount}>
                    //   <span
                    //     style={{
                    //       position: "absolute",
                    //       top: -1,
                    //       left: 6,
                    //       fontSize: "1rem",
                    //     }}
                    //   >
                    //     1
                    //   </span>
                    // </div>
                  }
                </Icon>
                <Icon
                  classes={{ root: classes.navIcon }}
                  style={{ position: "relative" }}
                >
                  <MdOutlineNotifications
                    className={classes.rightLocationIconCss}
                  />
                  {
                    // <div className={classes.notiCount}>
                    //   <span
                    //     style={{
                    //       position: "absolute",
                    //       top: -1,
                    //       left: 6,
                    //       fontSize: "1rem",
                    //     }}
                    //   >
                    //     1
                    //   </span>
                    // </div>
                  }
                </Icon>
                <Icon classes={{ root: classes.navIcon }}>
                  <AiOutlineArrowDown
                    className={classes.rightLocationIconCss}
                    onClick={(e) => handleClick(e)}
                  />
                </Icon>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  elevation={0}
                  disableAutoFocusItem={true}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <Avatar
                        alt="Nghia"
                        src={userImg}
                        className={classes.small}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </MenuItem>
                  <Divider
                    classes={{ root: classes.divider }}
                    variant="middle"
                  />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <ExitToAppIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  else return null;
}
