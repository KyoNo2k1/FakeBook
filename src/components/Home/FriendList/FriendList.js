import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Box,
  Divider,
} from "@material-ui/core";
import React from "react";

import userImg from "../../../images/avatar.png";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function FriendList() {
  const { arrUsers } = useSelector((store) => {
    return store.users;
  });
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <Paper className={classes.friendListHeader}>
        <Typography
          variant="h7"
          style={{ fontWeight: "bold" }}
          color="secondary"
        >
          Người liên hệ
        </Typography>
        <Box>
          <Link to={"/"} className={classes.headerIcon}>
            <VideoCallIcon />
          </Link>
          <Link to={"/"} className={classes.headerIcon}>
            <SearchIcon />
          </Link>
          <Link to={"/"} className={classes.headerIcon}>
            <MoreVertIcon />
          </Link>
        </Box>
      </Paper>
      <Paper variant="outlined" className={classes.friendListInfo}>
        {arrUsers.map((data, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              className={classes.listFriend}
              key={index}
              onClick={() => navigate("../messenger", { replace: true })}
            >
              <ListItemIcon>
                <Avatar alt="Nghia" src={userImg} />
              </ListItemIcon>
              <ListItemText primary={data?.name} />
            </ListItem>
            <Divider classes={{ root: classes.divider }} variant="middle" />
          </React.Fragment>
        ))}
      </Paper>
    </List>
  );
}

export default FriendList;
