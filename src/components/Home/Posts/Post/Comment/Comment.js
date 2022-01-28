import { Avatar, Box, Divider, Link, Paper, TextField } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { comment } from '../../../../redux/reducerSlice/commentPostSlice'
import useStyles from './styles'
import userImg from '../../../../../images/avatar.png'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Comment({postId}) {
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
    const submitCmt = (e) => {
        if(e.keyCode === 13 && inputRef.current.value != '') {
            dispatch(comment({
                postId: postId,
                message:inputRef.current.value
            }))
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
            <Paper className={classes.commentBody}>
                <div className={classes.commentBodyImg}>
                    <Avatar aria-label="recipe" className={classes.avatar} src={userImg}  />
                </div>
                <Box component='div' className={classes.commentBodyInfo}>
                    <Link href="#" color="inherit" className={classes.commentBodyInfoName}>
                        Trung Nghia
                    </Link>
                    <div className={classes.commentBodyInfoMessage}>helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </Box>
            </Paper>
        </>
    )
}

export default Comment;
