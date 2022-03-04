import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {createPost} from '../../../../redux/reducerSlice/postSlice.js'
import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'
import CloseIcon from '@material-ui/icons/Close';
import { getPost,updatePost } from '../../../../redux/reducerSlice/postSlice'

import useStyles from './styles'

function FormUpdate({postId, setOpenFormUpdate}) {
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({ message: '', selectedFile: '' })
    const { postCreated } = useSelector((store) => {
        return store.posts
    })
    useEffect(() => {
        dispatch(getPost(postId))
    },[])
    useEffect(() => {
        if(postCreated) setPostData({ message: postCreated?.message, selectedFile: postCreated?.selectedFile })
    },[postCreated])

    const classes = useStyles()

    const handleSubmit =(e) => {
        e.preventDefault()
        dispatch(updatePost({...postData,id: postId}))
        setOpenFormUpdate(false)
    }
    const handleCloseForm = () => {
        setOpenFormUpdate(false)
        setPostData({  message: '', selectedFile: '' })
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}}`} onSubmit={handleSubmit}>
                <Box style={{display: 'flex',position: 'relative',justifyContent: "center", alignItems: 'center'}}>
                    <Typography variant="h6" align="center">Chỉnh sửa bài viết</Typography>
                    <Button style={{position: "absolute", right: 0}} onClick={handleCloseForm}>
                        <CloseIcon />
                    </Button>
                </Box>
                <Divider classes={{root: classes.divider}} variant="middle" style={{margin: '10px 20px'}}/>
                <TextField
                    name="message"
                    variant="outlined"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={true}
                        onDone={(res) =>{
                            setPostData({ ...postData, selectedFile: res[0].base64})
                        }}
                    ></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default FormUpdate
