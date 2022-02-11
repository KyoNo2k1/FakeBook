import React, { useEffect, useState } from 'react'
// import useStyles from './styles'
import {  Grid, Grow } from '@material-ui/core'
import Category from '../Category/Category'
import FriendList from '../FriendList/FriendList'
import Posts from '../Posts/Posts'
import { useDispatch, useSelector} from 'react-redux';
import { useLocation,useNavigate } from "react-router-dom";
import { logout, refreshToken } from '../../redux/reducerSlice/userSlice'

function Home() {
    // const classes = useStyles()
    const { user, exp } = useSelector((store) => store.users)
    const refToken = JSON.parse(localStorage.getItem('profile')).refreshToken
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(()=>{
        if (user) {
            if (exp * 1000 < Date.now()) {
                dispatch(refreshToken({token: refToken, user: user.email}))
                // dispatch(logout())
                // setTimeout(() => {
                //     navigate('../login')
                // },100)
            }
        }
    },[location])
    if(user) return(
    <Grow in>
        <Grid container justify="center" alignItems="stretch" style={{marginTop: 70, height: '100%'}} >
            <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', left: 0}}>
                <Category />
            </Grid>
            <Grid item xs={12} sm={6} md={5} >
                <Posts/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} alignItems="stretch" style={{position: 'fixed', right: 0, width: '300px'}}>
                <FriendList />
            </Grid>
        </Grid>
    </Grow>)
    else return null
}

export default Home
