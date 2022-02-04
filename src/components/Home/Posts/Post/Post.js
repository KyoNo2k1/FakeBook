import React, {useState, useEffect} from 'react'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import clsx from 'clsx'

import Comment from './Comment/Comment.js'
import {Card , CardActions, CardContent, Typography, CardHeader, Avatar, IconButton, Divider, Link} from '@material-ui/core'
import useStyles from './styles'
import userImg from '../../../../images/avatar.png'
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ReplyIcon from '@material-ui/icons/Reply';
import { useDispatch } from 'react-redux'
import {likePost} from '../../../redux/reducerSlice/postSlice.js'

const Post = ({post,postId,likeList}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [commentCss, setCommentCss] = useState(true);
    const [numberLike, setNumberLike] = useState(post.likes)
    useEffect(() => {
        if(likeList?.includes(postId)) {
            setIsLiked(true)
        }
        else setIsLiked(false)
    },[likeList])
    
    const handleLikePost = (postId) => {
        dispatch(likePost({
            userLiking: JSON.parse(localStorage.getItem('profile')).data,
            postId: postId
        }))
        setIsLiked(!isLiked)
        if(!isLiked) setNumberLike(numberLike + 1)
        else setNumberLike(numberLike - 1)
    }


    const handleClick = () => {
        setIsComment(!isComment)
        setCommentCss(!commentCss)
    };

    return(
        <Card className={classes.card} raised elevation={6} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={userImg}  />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={
                    <Link href="#" color="inherit" underline="none" className={classes.cardHeaderName}>
                        {post.nameAuthor}
                    </Link>}
                subheader={moment(post.createdAt).format('DD-MM-YYYY')+ " lúc " + moment(post.createdAt).get('hour')+":"+moment(post.createdAt).get('minute')}
                subheaderTypographyProps={{variant: 'subtitle2'}}
                />
            <CardContent classes={{
                root: classes.cardContent,
            }}>
                <Typography variant="body2" color="textSecondary" component="p">
                {post.message}
                </Typography>
            </CardContent>
            <img src={post.selectedFile} />
            <Divider classes={{root: classes.divider}} variant="middle" />
            <CardActions disableSpacing style={{display: 'flex',justifyContent: 'space-between', padding: '10px 20px'}}>
                <Link to={'/'} className={classes.iconPost} onClick={() => handleLikePost(postId)}>
                {
                    isLiked ?   <ThumbUpAltRoundedIcon fontSize="small" id="likeButton"/>:
                                <ThumbUpAltOutlinedIcon fontSize="small" id="likeButton"/>
                } &nbsp; {numberLike} Like
                </Link>
                <Link to={'/'} className={classes.iconPost} onClick={handleClick}>
                {
                    isComment ?
                    <ChatBubbleIcon fontSize="small" />
                    :
                    <ChatBubbleOutlineIcon fontSize="small" />
                }&nbsp; Comment
                </Link>
                <Link to={'/'} className={classes.iconPost}>
                    <ReplyIcon fontSize="small" /> &nbsp; Share
                </Link>
            </CardActions>
            {
                isComment ?
                <div className={clsx(classes.commentSpace, classes.animatedItem, {
                    [classes.animatedItemExiting]: commentCss
                })}>
                    <Comment postId={postId}/>
                </div>
                : null
            }
        </Card>
    )
}

export default Post