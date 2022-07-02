import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import userImg from "../../../images/avatar.png";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";
import Message from "./Message/Message";
import { db } from "../../Auth/firebase/config";

const DetaiChat = () => {
  const detailChatHeaderHeight = 52;
  // useEffect(() => {
  //   db.collection("messages").onSnapShot((snapshot) => {
  //     console.log(snapshot);
  //   });
  // }, []);

  const classes = useStyles();

  const message = [
    {
      userName: "Nhan",
      message:
        "Hellovvvbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssaaaaaaaaaaaaaaaaaaaaaaa",
      email: "nhan@gmail.com",
    },
    {
      userName: "Nhan",
      message: "1231232132132131232",
      email: "nhan@gmail.com",
    },
    {
      userName: "Nghia",
      message: "514123213214124124",
      email: "nghia@gmail.com",
    },
    {
      userName: "Nhan",
      message: "2312241241231241124124124",
      email: "nhan@gmail.com",
    },
    {
      userName: "Nghia",
      message: "4513514123213123213",
      email: "nghia@gmail.com",
    },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0,0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          overflowY: "auto",
          padding: "0 20px 20px",
        }}
      >
        {message?.map(({ userName, message, email, index }) => {
          return (
            <Message
              userName={userName}
              message={message}
              email={email}
              key={index}
            />
          );
        })}
      </Box>
      <Box className={classes.chatBox}>asd</Box>
    </Box>
  );
};

export default DetaiChat;
