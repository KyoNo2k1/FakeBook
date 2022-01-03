import { List, ListItem, ListItemIcon, ListItemText,Avatar, Typography, Paper, Box, Divider } from '@material-ui/core'
import React from 'react'

import userImg from '../../../images/avatar.png'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Link } from 'react-router-dom';

const listFriendName = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6','Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6','Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6']
const listFriendAvatar = [userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg,userImg]


function FriendList() {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <Paper className={classes.friendListHeader} >
                <Typography variant="h7" style={{ fontWeight: 'bold'}} color='secondary'>Người liên hệ</Typography>
                <Box>
                    <Link to={'/'}className={classes.headerIcon}>
                        <VideoCallIcon />
                    </Link>
                    <Link to={'/'}className={classes.headerIcon}>
                        <SearchIcon />
                    </Link>
                    <Link to={'/'}className={classes.headerIcon}>
                        <MoreVertIcon />
                    </Link>
                </Box>
            </Paper>
            <Paper variant='outlined' className={classes.friendListInfo}>
            {
                listFriendName.map((name, index) => (
                    <React.Fragment>
                        <ListItem button className={classes.listFriend} key={index}>
                            <ListItemIcon>
                                <Avatar alt="Nghia" src={listFriendAvatar[index]} />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                        <Divider classes={{root: classes.divider}} variant="middle" />
                    </React.Fragment>
                ))
            }
            </Paper>
        </List>
    )
}

export default FriendList
