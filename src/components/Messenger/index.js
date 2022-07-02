import { Box, Paper } from "@material-ui/core";
import React from "react";
import ListChat from "./ListChat/ListChat";
import DetaiChat from "./DetailChat/DetaiChat";
import SettingChat from "./SettingChat/SettingChat";

function Messenger() {
  const chatHeight = window.innerHeight - 66;
  //92 = 65 + padding

  return (
    <Box>
      <Paper
        elevation={0}
        style={{
          marginTop: 65,
          height: chatHeight,
          position: "absolute",
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
          backgroundColor: "transparent",
          display: "flex",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ListChat />
        <DetaiChat />
        <SettingChat />
      </Paper>
    </Box>
  );
}

export default Messenger;
