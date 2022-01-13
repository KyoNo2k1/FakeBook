import React, { useState, useEffect } from 'react'
import { createPost } from '../../../../../app/api';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import addPost from '../../../../redux/reducerSlice/postSlice'


import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'
import CloseIcon from '@material-ui/icons/Close';


import useStyles from './styles'

function Form({posts,setOpenForm}) {
    const classes = useStyles()
    const [postData, setPostData] = useState({ message: '', selectedFile: [] })
    const dispatch = useDispatch()
    const user = useSelector((store) => store?.users?.user?.data)

    const handleSubmit =async (e) => {
        e.preventDefault()

        console.log({user});

        const {data} =await createPost({...postData})
        console.log({data});
        // dispatch(addPost(data))
    }
    const clear = () => {
        setPostData({  message: '', selectedFile: [] })
    }
    const handleCloseForm = () => {
        setOpenForm(false)
        clear()
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autocomplete="off" noValidate className={`${classes.root} ${classes.form}}`} onSubmit={handleSubmit}>
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
                    label={`nghia, bạn đang nghĩ gì thế ?` }
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={true}
                        onDone={(res) =>{
                            var arrImg = []
                            for (let i = 0; i < res.length; i++){
                                arrImg.push(res[i].base64)
                            }
                            setPostData({ ...postData, selectedFile: arrImg})
                        }}
                    ></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form
