import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result}`
    }
    return req
})
    //post
export const fetchPost = (id) => API.get(`/posts`)
export const createPost = (newPosts) => API.post('/posts', newPosts)
export const getPost = (postId) => API.get(`/posts/${postId}`)
export const updatePost = (data) => API.patch('/posts/update', data)
export const getPosts = (page) => API.get(`/posts?page=${page}`)
export const deletePost = (postId) => API.delete(`/posts/delete/${postId}`)

    //like
export const likePost = (dataLike) => API.post('/posts/likePost',dataLike)
export const currentLikePost = () => API.get('/posts/currentLikePost')
    //comment
export const comment = (data) => API.post('/posts/comment', data)
export const getCommentByPage = (data) => API.post('/posts/getCommentByPage',data)
    //auth
export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)
export const isAuthor = (postId) => API.post('/posts/auth', postId)



