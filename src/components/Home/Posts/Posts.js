import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { useSelector,useDispatch } from 'react-redux'

import Post from './Post/Post'
import useStyles from './styles'
import FormPost from './FormPost/FormPost';
import CircularProgress from '../../CircularProgress/CircularProgress.js'
import { getPosts, currentLikePost } from '../../redux/reducerSlice/postSlice.js'


const Posts = ({user}) => {
    const {posts , status, likeList } = useSelector((store) => {
        return store.posts
    })
    const [currentPost, setCurrentPost] = useState(posts)
    const classes = useStyles()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
        dispatch(currentLikePost())
    },[])
    useEffect(() => {
        if(posts) setCurrentPost(posts)

    },[posts])
    return(
        <React.Fragment>
            <FormPost/>
            {status !== "SUCCESS" ?
                <CircularProgress/> :
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        currentPost?.map((post, index) => (
                            <Grid key={index} item xs={12} sm={12} lg={12}>
                                <Post post={post} postId={post.id} likeList={likeList}/>
                            </Grid>
                        ))
                    }
                </Grid>
            }
        </React.Fragment>
    )
}

export default Posts