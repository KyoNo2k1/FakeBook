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



const Posts = () => {
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(2)

    const {post,posts , status, likeList, limit,statusDelete,statusCreate,postCreated } = useSelector((store) => {
        return store.posts
    })
    console.log(posts);
    const [currentPost, setCurrentPost] = useState([])
    const classes = useStyles()

    const dispatch = useDispatch()
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        dispatch(getPosts(1))
        dispatch(currentLikePost())
    },[])
    useEffect(() => {
        if (post){
            var newArr = currentPost.map((updatePost) => {
                if (updatePost.id === post.id){
                    var newData = {...updatePost,...post}
                    return newData
                }
                return updatePost
            })
            setCurrentPost(newArr)
        }
    },[post])
    useEffect(() => {
        if(statusDelete === 'SUCCESS' || statusCreate === 'CREATE_SUCCESS') {
            setCurrentPost(posts)
        }
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
        dispatch(getPosts(page))
        if((posts.length === 0 || posts.length < limit) && statusDelete != 'SUCCESS'){
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
                                <b>Bạn đã xem tất cả bài viết ~~~!!</b>
                            </p>
                        }
                        className={classes.infiniteScroll}
                        scrollThreshold={0.7}
                        >
                        {currentPost?.map((post, index) =>{
                            // console.log(post);
                            return (
                                <Box className={classes.item} key={index} item xs={12} sm={12} lg={12}>
                                    <Post post={post} postId={post.id} likeList={likeList}/>
                                </Box>
                            )
                        }
                        )}
                    </InfiniteScroll>
                </Box>
            }
        </React.Fragment>
    )
}

export default Posts