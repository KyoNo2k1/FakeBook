import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import userImg from "../../../images/avatar.png";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";

const DetaiChat = () => {
  const detailChatHeaderHeight = 52;

  const classes = useStyles();
  return (
    <Box sx={{ flex: 1, backgroundColor: "rgba(0, 0, 0,0.2)" }}>
      <Box
        sx={{
          height: detailChatHeaderHeight,
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar alt="Avatar1" src={userImg} />
          <Box sx={{ mx: 1 }}>
            <Typography style={{ fontWeight: 700, fontSize: 20 }}>
              Trung Nghia
            </Typography>
            <Typography variant="subtitle2">Đang hoạt động</Typography>
          </Box>
        </Box>
        <Box sx={{ mx: 2, display: "flex" }}>
          <Avatar className={classes.btnCss}>
            <CallIcon style={{ fontSize: "1.4rem", color: "#000" }} />
          </Avatar>
          <Avatar className={classes.btnCss}>
            <VideocamIcon style={{ fontSize: "1.4rem", color: "#000" }} />
          </Avatar>
          <Avatar className={classes.btnCss}>
            <InfoIcon style={{ fontSize: "1.4rem", color: "#000" }} />
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default DetaiChat;
