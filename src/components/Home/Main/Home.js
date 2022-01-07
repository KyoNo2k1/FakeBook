import React from 'react'
import {  Grid, Grow } from '@material-ui/core'

// import useStyles from './styles'
import Category from '../Category/Category'
import FriendList from '../FriendList/FriendList'
import Posts from '../Posts/Posts'



function Home({setUser}) {
    // const classes = useStyles()

    return (
        <Grow in>
            <Grid container justify="center" alignItems="stretch" style={{marginTop: 70, height: '100%'}} >
                <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', left: 0}}>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={6} md={5} >
                    <Posts />
                </Grid>
                <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', right: 0, width: '300px'}}>
                    <FriendList />
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Home
