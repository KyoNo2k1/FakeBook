import React, { useState, useEffect, useRef } from "react";
import {
  Avatar,
  Box,
  Typography,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import userImg from "../../../images/avatar.png";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";
import Message from "./Message/Message";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import GifIcon from "@material-ui/icons/Gif";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { useSelector } from "react-redux";

import firebase, { db } from "../../Auth/firebase/config";

const DetaiChat = () => {
  const detailChatHeaderHeight = 52;
  const [messages, setMessages] = useState([]);
  const { user } = useSelector((store) => {
    return store.users;
  });
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const [emojiBtn, setEmojiBtn] = useState(false);
  const chatRef = useRef();
  const [chat, setChat] = useState("");
  const classes = useStyles();
  const onEmojiClick = async (event, emojiObject) => {
    if (chatRef.current.value === "") chatRef.current.value = emojiObject.emoji;
    else {
      chatRef.current.value = chat + emojiObject.emoji;
      setChat(chatRef.current.value);
    }
  };
  const sendChat = (e) => {
    e.preventDefault();
    if (e.keyCode === 13 && chatRef.current.value !== "") {
      db.collection("messages").add({
        message: chat,
        userName: user.name,
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      chatRef.current.value = "";
      setChat("");
      setEmojiBtn(false);
    }
  };

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
          flex: "1",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "flex-start",
          padding: "0 20px 20px",
          marginTop: 10,
        }}
      >
        {messages?.map(({ data, id }) => {
          return (
            <Message
              userName={data?.userName}
              message={data?.message}
              email={data?.email}
              key={id}
            />
          );
        })}
      </Box>
      <Box className={classes.chatBox}>
        <Box className={classes.chatBoxIcon}>
          <AddCircleOutlineIcon style={{ fontSize: 30 }} />
          <BrokenImageIcon style={{ fontSize: 30 }} />
          <LoyaltyIcon style={{ fontSize: 30 }} />
          <GifIcon style={{ fontSize: 28, padding: 3 }} />
        </Box>
        <FormControl className={classes.inputChat} variant="filled">
          <FilledInput
            type="text"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="hello"
            classes={{
              input: classes.inputPlace,
              adornedEnd: { paddingRight: 0 },
            }}
            inputRef={chatRef}
            onKeyUp={(e) => sendChat(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setEmojiBtn(!emojiBtn)} edge="end">
                  <InsertEmoticonIcon style={{ fontSize: 20 }} />
                </IconButton>
                {emojiBtn ? (
                  <Picker
                    onEmojiClick={onEmojiClick}
                    skinTone={SKIN_TONE_MEDIUM_DARK}
                    pickerStyle={{
                      position: "absolute",
                      zIndex: 100,
                      bottom: "40px",
                      right: "30px",
                    }}
                  />
                ) : null}
              </InputAdornment>
            }
          />
        </FormControl>
        <Box
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            cursor: "pointer",
            padding: 5,
          }}
        >
          <ThumbUpAltOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default DetaiChat;
