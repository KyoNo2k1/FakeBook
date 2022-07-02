import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import UserImg from "../../../../images/avatar.png";
import { useSelector } from "react-redux";

const Message = ({ userName, message, email }) => {
  const classes = useStyles();
  const { user } = useSelector((store) => store.users);
  return (
    <Box
      className={`${
        user.email === email ? classes.chipChatUser : classes.chipChatGuest
      }`}
    >
      <Avatar alt="user" src={UserImg} style={{ width: 35, height: 35 }} />
      <Typography align="left" className={classes.chatMessage}>
        {message}
      </Typography>
    </Box>
  );
};

export default Message;
