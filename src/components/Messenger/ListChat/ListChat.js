import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { BsThreeDots } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import SearchIcon from "@material-ui/icons/Search";
import userImg from "../../../images/avatar.png";
const ListChat = ({ setGuest }) => {
  const { arrUsers } = useSelector((store) => {
    return store.users;
  });

  const classes = useStyles();
  const listHeader = 122;
  const listBody = window.innerHeight - listHeader - 92;

  return (
    <Paper
      style={{ width: "26%", backgroundColor: "rgba(0, 0, 0,0.2)" }}
      elevation={0}
    >
      <Paper
        style={{
          width: "90%",
          height: listHeader,
          margin: "10px 15px 0",
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
          elevation={0}
        >
          <Typography variant="h5" style={{ fontWeight: 900 }}>
            Chat
          </Typography>
          <Box
            sx={{
              width: "40%",
              backgroundColor: "tranparent",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Avatar className={classes.btnCss}>
              <BsThreeDots style={{ fontSize: "1.4rem", color: "#000" }} />
            </Avatar>
            <Avatar className={classes.btnCss}>
              <MdVideoCall style={{ fontSize: "1.4rem", color: "#000" }} />
            </Avatar>
            <Avatar className={classes.btnCss}>
              <FiEdit style={{ fontSize: "1.4rem", color: "#000" }} />
            </Avatar>
          </Box>
        </Paper>
        <Paper className={classes.search}>
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
        </Paper>
      </Paper>
      <Paper
        style={{
          width: "100%",
          height: listBody,
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          classes={{ root: classes.listChat }}
        >
          {arrUsers?.map((user, index) => (
            <ListItem
              alignItems="center"
              button={true}
              divider={true}
              selected={true}
              classes={{ root: classes.listChatItem }}
              key={index}
              onClick={() => setGuest(user)}
            >
              <ListItemAvatar
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                classes={{ root: classes.listItemAvatarRoot }}
              >
                <Avatar
                  style={{ width: 50, height: 50 }}
                  alt="Avatar1"
                  src={userImg}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: "inline" }}
                    classes={{ root: classes.chatName }}
                    component="span"
                    color="text.primary"
                  >
                    {user?.name}
                  </Typography>
                }
                secondary={
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "inline", flex: 1 }}
                      classes={{ root: classes.chatTitle2 }}
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      <Typography
                        sx={{ display: "block" }}
                        classes={{ root: classes.chatTitle1 }}
                        component="span"
                        variant="subtitle2"
                        color="text.primary"
                      >
                        Nghia
                      </Typography>
                      {" ⋆ Chào mừng bạn đã đến với website fakebook of me"}
                    </Typography>
                    <Typography
                      sx={{ display: "flex" }}
                      classes={{ root: classes.chatTime }}
                    >
                      72 giờ
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Paper>
  );
};

export default ListChat;
