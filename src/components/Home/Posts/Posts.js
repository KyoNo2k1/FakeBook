import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector,useDispatch } from 'react-redux'

import InfiniteScroll from 'react-infinite-scroll-component'
import Post from './Post/Post'
import useStyles from './styles'
import FormPost from './FormPost/FormPost';
import CircularProgress from '../../CircularProgress/CircularProgress.js'
import { getPosts, currentLikePost } from '../../redux/reducerSlice/postSlice.js'
import { currentCommentPost } from '../../redux/reducerSlice/commentPostSlice'



const Posts = ({user}) => {
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(2)

    const {posts , status, likeList, limit } = useSelector((store) => {
        return store.posts
    })

    const [currentPost, setCurrentPost] = useState(posts)
    const classes = useStyles()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts(1))
        dispatch(currentLikePost())
    },[])
    useEffect(() => {
        if(status === 'CREATE_SUCCESS') setCurrentPost(posts)
        else {
            if(posts) setCurrentPost([...currentPost,...posts])
        }
    },[posts])
    useEffect(() => {
        if(status === 'SUCCESS'){
            var arrPostId = []
            posts.map(post =>{
                arrPostId.push(post.id)
            })
            var newArr = {
                postId: `(${arrPostId.toString()})`
            }
            setTimeout(() => {
                dispatch(currentCommentPost(newArr))
            },500)
        }
    },[status])

    const fetchData =() => {
        console.log(posts);
        dispatch(getPosts(page))
        if(posts.length === 0 || posts.length < limit){
            setHasMore(false)
        }
        setPage(page + 1)
    }
    return(
        <React.Fragment>
            <FormPost/>
            {currentPost == null ?
                <CircularProgress/> :
                <Box className={classes.container}>
                    <InfiniteScroll
                        dataLength={currentPost.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<CircularProgress/>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>You have seen it all</b>
                            </p>
                        }
                        className={classes.infiniteScroll}
                        scrollThreshold={0.9}
                        >
                        {currentPost?.map((post, index) =>
                            <Box className={classes.item} key={index} item xs={12} sm={12} lg={12}>
                                <Post post={post} postId={post.id} likeList={likeList}/>
                            </Box>
                        )}
                    </InfiniteScroll>
                </Box>
            }
        </React.Fragment>
    )
}

export default Posts