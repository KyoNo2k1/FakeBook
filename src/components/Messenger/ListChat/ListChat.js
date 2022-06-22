import React from "react";
import useStyles from "./styles";

import { Avatar, Box, Paper, Typography } from "@material-ui/core";
import { BsThreeDots } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
const ListChat = () => {
  const classes = useStyles();

  return (
    <Paper
      style={{ width: "26%", backgroundColor: "rgba(0, 0, 0,0.2)" }}
      elevation={0}
    >
      <Paper
        style={{
          width: "90%",
          height: 122,
          margin: "10px 15px 15px",
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
      </Paper>
    </Paper>
  );
};

export default ListChat;
