import React, { useState } from 'react'
import {Avatar, Button, Divider, Grid, Modal } from '@material-ui/core'
import { useSelector } from 'react-redux';

import VideocamIcon from '@material-ui/icons/Videocam';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import userImg from '../../../../images/avatar.png'
import useStyles from './styles'
import Form from './Form/Form';

function FormPost() {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)

    const handleCloseForm = () => {
        setOpenForm(false)
    }
    const handleOpenForm = () => {
        setOpenForm(true)
    }
    const userName = JSON.parse(localStorage.getItem('profile'))?.data?.name
    return (
        <Grid className={classes.formPost} container xs={12} sm={12} lg={12}>
            <div>
                <Grid item xs={12} sm={12} lg={12} alignItems="center" className={classes.formPostTop}>
                    <Avatar alt="Nghia" src={userImg} className={classes.formPostAvatart}/>
                    <Button fullWidth className={classes.formPostMessage} onClick={handleOpenForm}>{`${userName} write here`}</Button>
                </Grid>
            </div>
            <Divider classes={{root: classes.divider}} variant="middle" style={{margin: '10px 20px'}}/>
            <div>
                <Grid className={classes.formPostBottom} container  xs={12} sm={12} lg={12}>
                    <Grid item xs={4} sm={4} lg={4} fullWidth>
                        <Button fullWidth>
                            <VideocamIcon style={{color: '#f3425f'}}/>
                            <span style={{fontSize: '10px', fontWeight: 'bold', marginLeft: '4px'}}>Video trực tiếp</span>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} fullWidth>
                        <Button fullWidth>
                            <CropOriginalIcon style={{color: '#45bd62'}} />
                            <span style={{fontSize: '10px', fontWeight: 'bold', marginLeft: '4px'}}>Ảnh / Video</span>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} lg={4} fullWidth>
                        <Button fullWidth>
                            <EmojiEmotionsIcon style={{color: '#dda728'}}/>
                            <span style={{fontSize: '10px', fontWeight: 'bold', marginLeft: '4px'}}>Cảm xúc / Hoạt động</span>
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Modal open={openForm} onClose={handleCloseForm} >
                { <Form userName={userName} setOpenForm={setOpenForm}/> }
            </Modal>
        </Grid>
    )
}

export default FormPost
