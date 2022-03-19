import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import {createPost} from '../../../../redux/reducerSlice/postSlice.js'
import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles'
import { getPosts } from '../../../../redux/reducerSlice/postSlice';

function Form({userName,setOpenForm}) {
    const classes = useStyles()
    const [postData, setPostData] = useState({ message: '', selectedFile: '' })
    const dispatch = useDispatch()

    const handleSubmit =(e) => {
        e.preventDefault()
        dispatch(createPost(postData))
        setOpenForm(false)
        setTimeout(() => dispatch(getPosts(1)),500)
    }
    const clear = () => {
        setPostData({  message: '', selectedFile: '' })
    }
    const handleCloseForm = () => {
        setOpenForm(false)
        clear()
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}}`} onSubmit={handleSubmit}>
                <Box style={{display: 'flex',position: 'relative',justifyContent: "center", alignItems: 'center'}}>
                    <Typography variant="h6" align="center">TẠO BÀI VIẾT</Typography>
                    <Button style={{position: "absolute", right: 0}} onClick={handleCloseForm}>
                        <CloseIcon />
                    </Button>
                </Box>
                <Divider classes={{root: classes.divider}} variant="middle" style={{margin: '10px 20px'}}/>
                <TextField
                    name="message"
                    variant="outlined"
                    label={`${userName}, bạn đang nghĩ gì thế ?` }
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={true}
                        onDone={(res) =>{
                            // var arrImg = []
                            // for (let i = 0; i < res.length; i++){
                            //     arrImg.push(res[i].base64)
                            // }
                            setPostData({ ...postData, selectedFile: res[0].base64})
                        }}
                    ></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form
