import { Paper } from "@material-ui/core";
import React from "react";
import ListChat from "./ListChat/ListChat";
import DetaiChat from "./DetailChat/DetaiChat";
import SettingChat from "./SettingChat/SettingChat";

function Messenger() {
  console.log(typeof window.innerHeight);
  const chatHeight = window.innerHeight - 65;
  //92 = 65 + padding

  return (
    <>
      <Paper
        elevation={0}
        style={{
          marginTop: 65,
          height: chatHeight,
          position: "fixed",
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
          backgroundColor: "transparent",
          display: "flex",
        }}
      >
        <ListChat />
        <DetaiChat />
        <SettingChat />
      </Paper>
    </>
  );
}

export default Messenger;
