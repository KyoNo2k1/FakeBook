import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles'

function Form({posts,setOpenForm}) {
    const classes = useStyles()
    const [postData, setPostData] = useState({ message: '', selectedFile: '' })

    const handleSubmit = () => {
        console.log(postData);
    }
    const clear = () => {
        setPostData({ title: '', message: '',tags: '', selectedFile: '' })
    }
    const handleCloseForm = () => {
        setOpenForm(false)
    }
    // <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
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
                <TextField name="message" variant="outlined" label={`${posts[0].userName}, bạn đang nghĩ gì thế ?` } fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    ></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form
