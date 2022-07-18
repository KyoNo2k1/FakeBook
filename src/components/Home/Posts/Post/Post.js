import React, { useState, useEffect } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import clsx from "clsx";

import Comment from "./Comment/Comment.js";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Divider,
  Link,
  Popper,
  Fade,
  Button,
  Paper,
  Modal,
} from "@mui/material";
import useStyles from "./styles";
import userImg from "../../../../images/avatar.png";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import { useDispatch } from "react-redux";
import {
  likePost,
  deletePost,
  authorPost,
} from "../../../redux/reducerSlice/postSlice.js";
import FormUpdate from "../FormPost/FormUpdate/FormUpdate";

const Post = ({ post, postId, likeList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [commentCss, setCommentCss] = useState(true);
  const [numberLike, setNumberLike] = useState(post.likes);
  useEffect(() => {
    if (likeList?.includes(postId)) {
      setIsLiked(true);
    } else setIsLiked(false);
  }, [likeList]);
  useEffect(() => {
    dispatch(authorPost(postId));
  }, []);
  const handleLikePost = (postId) => {
    dispatch(
      likePost({
        userLiking: JSON.parse(localStorage.getItem("profile")).data,
        postId: postId,
      })
    );
    setIsLiked(!isLiked);
    if (!isLiked) setNumberLike(numberLike + 1);
    else setNumberLike(numberLike - 1);
  };

  const handleClickCmt = () => {
    setIsComment(!isComment);
    setCommentCss(!commentCss);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [moreIcon, setMoreIcon] = useState(false);

  const handleClickMenu = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setMoreIcon(!moreIcon);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
    setAnchorEl(null);
    setMoreIcon(false);
  };

  const [openForm, setOpenFormUpdate] = useState();
  const handleCloseForm = () => {
    setOpenFormUpdate(false);
  };
  const handleEditPost = () => {
    setOpenFormUpdate(true);
  };

  return (
    <>
      <Card className={classes.card} raised elevation={6} variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={userImg}
            />
          }
          action={
            <div>
              {moreIcon ? (
                <IconButton
                  aria-label="settings"
                  style={{ backgroundColor: "#c5c5c5" }}
                  aria-describedby={id}
                  onClick={handleClickMenu}
                >
                  <MoreHorizIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="settings"
                  aria-describedby={id}
                  onClick={handleClickMenu}
                >
                  <MoreHorizIcon />
                </IconButton>
              )}
              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition
                placement="bottom-end"
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper className={classes.settingPost} elevation={6}>
                      <Typography>
                        <Button
                          fullWidth
                          size="small"
                          color="secondary"
                          className={classes.settingPostBtn}
                          onClick={handleDeletePost}
                        >
                          Xóa
                        </Button>
                      </Typography>
                      <Typography>
                        <Button
                          fullWidth
                          size="small"
                          color="secondary"
                          className={classes.settingPostBtn}
                          onClick={handleEditPost}
                        >
                          Chỉnh sửa
                        </Button>
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </div>
          }
          title={
            <Link
              href="#"
              color="inherit"
              underline="none"
              className={classes.cardHeaderName}
            >
              {post.nameAuthor}
            </Link>
          }
          subheader={
            moment(post.createdAt).format("DD-MM-YYYY") +
            " lúc " +
            moment(post.createdAt).get("hour") +
            ":" +
            moment(post.createdAt).get("minute")
          }
          subheaderTypographyProps={{ variant: "subtitle2" }}
        />
        <CardContent
          classes={{
            root: classes.cardContent,
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <img alt="SelectedFile" src={post.selectedFile} />
        <Divider classes={{ root: classes.divider }} variant="middle" />
        <CardActions
          disableSpacing
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Link
            to={"/"}
            className={classes.iconPost}
            onClick={() => handleLikePost(postId)}
          >
            {isLiked ? (
              <ThumbUpAltRoundedIcon fontSize="small" id="likeButton" />
            ) : (
              <ThumbUpAltOutlinedIcon fontSize="small" id="likeButton" />
            )}{" "}
            &nbsp; {numberLike} Like
          </Link>
          <Link to={"/"} className={classes.iconPost} onClick={handleClickCmt}>
            {isComment ? (
              <ChatBubbleIcon fontSize="small" />
            ) : (
              <ChatBubbleOutlineIcon fontSize="small" />
            )}
            &nbsp; Comment
          </Link>
          <Link to={"/"} className={classes.iconPost}>
            <ReplyIcon fontSize="small" /> &nbsp; Share
          </Link>
        </CardActions>
        {isComment ? (
          <div
            className={clsx(classes.commentSpace, classes.animatedItem, {
              [classes.animatedItemExiting]: commentCss,
            })}
          >
            <Comment postId={postId} />
          </div>
        ) : null}
      </Card>
      <Modal open={openForm} onClose={handleCloseForm}>
        <FormUpdate postId={postId} setOpenFormUpdate={setOpenFormUpdate} />
      </Modal>
    </>
  );
};

export default Post;
