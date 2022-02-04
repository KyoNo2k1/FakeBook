import { Avatar, Box, Divider, Link, Paper, TextField } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { comment,currentCommentPost } from '../../../../redux/reducerSlice/commentPostSlice'
import useStyles from './styles'
import userImg from '../../../../../images/avatar.png'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Comment({postId}) {
    const { comments, status } = useSelector(store => store.comments)
    const [currentCmtArr, setCurrentCmtArr] = useState()
    useEffect(() => {
        console.log(comments);
        const arrCmt = comments.filter(comment => comment.postId === postId)
        setCurrentCmtArr(arrCmt)
    },[comments])

    const classes = useStyles()
    const [cmt, setCmt] = useState()
    const [emojiBtn, setEmojiBtn] = useState(false)
    const inputRef = useRef()
    const dispatch = useDispatch()

    const onEmojiClick =async (event, emojiObject) => {
        inputRef.current.value = cmt + emojiObject.emoji
        setCmt(inputRef.current.value)
    };

    const inputCmt = (e) => {
        setCmt(e.target.value)
    }
    useEffect(() => {
        dispatch(currentCommentPost(postId))
    },[])
    const submitCmt = (e) => {
        if(e.keyCode === 13 && inputRef.current.value != '') {
            dispatch(comment({
                postId: postId,
                message:inputRef.current.value
            }))
            inputRef.current.value = ''
        }
    }
    return (
        <>
            <Divider classes={{root: classes.divider}} variant="middle" />
            <Paper className={classes.commentHeader}>
                <Avatar aria-label="recipe" className={classes.avatar} src={userImg}  />
                <TextField
                placeholder="Comment"
                variant="outlined"
                size="small"
                inputRef={inputRef}
                onChange={(e) => inputCmt(e)}
                onKeyUp={(e) => submitCmt(e)}
                style={{
                    marginLeft: '5px',
                    flex: 1,
                    borderRadius: '20px'
                }}
                />
                <div className={classes.emojiCmt}>
                    <EmojiEmotionsIcon onClick={() => setEmojiBtn(!emojiBtn) }/>
                    {
                        emojiBtn ?
                            <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} pickerStyle={{position: "absolute",zIndex: 1,top: "1.5em"}}/>
                        :
                        null
                    }
                </div>
            </Paper>
            {
                currentCmtArr?.map((cmtMessage,index) => {
                    return (
                        <Paper className={classes.commentBody} key={index}>
                            <div className={classes.commentBodyImg}>
                                <Avatar aria-label="recipe" className={classes.avatar} src={userImg}  />
                            </div>
                            <Box component='div' className={classes.commentBodyInfo}>
                                <Box component='div' className={classes.commentBodyInfoHeader}>
                                    <Link href="#" color="inherit" underline="none" className={classes.commentBodyInfoName}>
                                        {cmtMessage.emailUser}
                                    </Link>
                                    <div className={classes.commentBodyInfoMessage}>{cmtMessage.message}</div>
                                </Box>
                                <Box>
                                    <a className={classes.miniBtnCmt}>Like</a>
                                    <a className={classes.miniBtnCmt}>Reply</a>
                                    <span style={{fontSize: '0.7rem'}}>{moment(cmtMessage.createdAt).format('DD-MM-YYYY')+ " lúc " + moment(cmtMessage.createdAt).get('hour')+":"+moment(cmtMessage.createdAt).get('minute')}</span>
                                </Box>
                            </Box>
                        </Paper>
                    )
                })
            }
        </>
    )
}

export default Comment;
