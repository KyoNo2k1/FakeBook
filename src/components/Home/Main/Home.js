import React, { useEffect } from 'react'
// import useStyles from './styles'
import {  Grid, Grow } from '@material-ui/core'
import Category from '../Category/Category'
import FriendList from '../FriendList/FriendList'
import Posts from '../Posts/Posts'

function Home({user,setUser}) {
    // const classes = useStyles()
    if(!user){
        setUser((JSON.parse(localStorage.getItem('profile'))?.data))
        return null
    }
    return (
        <Grow in>
            <Grid container justify="center" alignItems="stretch" style={{marginTop: 70, height: '100%'}} >
                <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', left: 0}}>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={6} md={5} >
                    <Posts user={user}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', right: 0, width: '300px'}}>
                    <FriendList />
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Home
