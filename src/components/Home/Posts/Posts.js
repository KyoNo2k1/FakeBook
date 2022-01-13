import React from 'react'
import {Avatar, Button, ButtonBase, Divider, Grid ,Paper, TextField} from '@material-ui/core'
import CircularProgress from '../../CircularProgress/CircularProgress'

import Post from './Post/Post'
import useStyles from './styles'
import FormPost from './FormPost/FormPost';

const posts = [{
    userId: 1,
    userName: 'Nghia',
    postId: 1,
    message: 'hello1',
    // selectedFile: String,
    // likes: {
    //     type: [String],
    //     default: [],
    // },
    // comments: {
    //     type: [String],
    //     default: [],
    // },
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // },
},
{
    userId: 2,
    userName: 'Nghia',
    postId: 2,
    message: 'hello2',
}
]

const Posts = () => {
    const classes = useStyles()
    const isLoading  = false

    if (!posts.length && !isLoading) return 'No posts!'

    return(
        isLoading ?
                <Paper elevation={0} className={classes.circularProgress}>
                    <CircularProgress className={classes.circularProgressIcon} color="secondary" />
                </Paper>
            : (
                <React.Fragment>
                    <FormPost posts={posts}/>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            posts.map(post => (
                                <Grid key={post.postId} item xs={12} sm={12} lg={12}>
                                    <Post post={post} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </React.Fragment>
        )
    )
}

export default Posts