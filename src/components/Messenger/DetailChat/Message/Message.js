import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import UserImg from "../../../../images/avatar.png";
import { useSelector } from "react-redux";

const Message = ({ userName, message, email, imgUrl }) => {
  const classes = useStyles();
  const { user } = useSelector((store) => store.users);
  return (
    <Box
      className={`${
        user.email === email ? classes.chipChatUser : classes.chipChatGuest
      }`}
    >
      <Avatar alt="user" src={UserImg} style={{ width: 35, height: 35 }} />
      <Box style={{ float: "right" }}>
        <Typography align="left" className={classes.chatMessage}>
          {message}
        </Typography>
        {imgUrl ? (
          <Box
            component="img"
            sx={{
              height: 150,
              width: 150,
              maxHeight: { xs: 150, md: 80 },
              maxWidth: { xs: 150, md: 80 },
            }}
            alt="Chat Image."
            src={imgUrl}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Message;
