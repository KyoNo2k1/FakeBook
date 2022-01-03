import React, {useState} from 'react'
import {Card , CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, CardHeader, Avatar, IconButton, Divider, Link} from '@material-ui/core'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'


import useStyles from './styles'
// import { useDispatch } from 'react-redux'


import userImg from '../../../../images/avatar.png'
import img1 from '../../../../images/1.jfif'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyIcon from '@material-ui/icons/Reply';
// const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

const Post = ({post}) => {
    const classes = useStyles()

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
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={img1}
                title="Paella dish"
                style={{marginBottom: 5}}
            />
            <Divider classes={{root: classes.divider}} variant="middle" />
            <CardActions disableSpacing style={{display: 'flex',justifyContent: 'space-between', padding: '10px 20px'}}>
                <Link to={'/'} className={classes.iconPost}>
                    <ThumbUpAltOutlined fontSize="small" /> &nbsp; Like
                </Link>
                <Link to={'/'} className={classes.iconPost}>
                    <ChatBubbleOutlineIcon fontSize="small" /> &nbsp; Comment
                </Link>
                <Link to={'/'} className={classes.iconPost}>
                    <ReplyIcon fontSize="small" /> &nbsp; Share
                </Link>
            </CardActions>
        </Card>
    )
}

export default Post