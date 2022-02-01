import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result}`
    }
    return req
})
export const fetchPost = (id) => API.get(`/posts`)
export const createPost = (newPosts) => API.post('/posts', newPosts)
export const getPosts = (page) => API.get(`/posts?page=${page}`)
export const likePost = (dataLike) => API.post('/posts/likePost',dataLike)
export const currentLikePost = (emailUser) => API.get('/posts/currentLikePost',emailUser)
export const comment = (data) => API.post('/posts/comment', data)
export const getCommentPost = (postId) => API.get(`/posts/commentPost/${postId}`)

// export const fetchPost = (id) => API.get(`/postss/${id}`)
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
// export const deletePost = (id) => API.delete(`/posts/${id}`)


export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)


