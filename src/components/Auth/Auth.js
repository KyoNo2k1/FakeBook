import React, { useState, useEffect } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, Divider } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebase/config'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import useStyles from './styles'
import Input from './Input';
import fakebookImg from '../../images/fakebook.png'
import { signup, login, loginThird } from '../redux/reducerSlice/userSlice.js'
import FacebookIcon from '@material-ui/icons/Facebook';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Auth() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { user } = useSelector(store => store.users)

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '../home',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
    };

    const [isSignIn, setIsSignIn] = useState(false)
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((userThird) => {
            console.log(userThird);
            if(userThird){
                setIsSignIn(!!userThird)
            }
        })
        return () => unregisterAuthObserver()
    },[])
    useEffect(async () => {
        const _token = await firebase.auth()?.currentUser.getIdToken()
        console.log(firebase.auth());
        if(isSignIn){
            dispatch(loginThird({
                data: {
                    name: firebase.auth().currentUser?.displayName,
                    email: firebase.auth().currentUser?.email
                },
                token: _token,
            }))
        }
    },[isSignIn])
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (isSignup) {
            if (e.target[6]?.value === e.target[9]?.value) {
                dispatch(signup(formData))
                setTimeout(() => navigate('../'), 3000)
            } else {
                alert("Re-entered password does not match!")
                e.target[9].value = ''
            }
        } else {
            dispatch(login(formData))
            setTimeout(() => {
                if (JSON.parse(localStorage.getItem('profile')) == null) {
                    alert("Username or password incorrect!")
                } else navigate('../home')
            }, 3000)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    return ( <Container component = "main"
        style = {
            { display: 'flex', maxWidth: "none", margin: 0, marginTop: "150px", } } >
        <img style = {{ height: "400px", marginRight: "500px", } } src = { fakebookImg }/>
        <Paper className = { classes.paper } elevation = { 3 }>
        <Typography variant = "h5" > { isSignup ? 'Sign Up' : 'Sign In' } </Typography>
        <form className = { classes.form } onSubmit = { handleSubmit } >
        <Grid container spacing = { 2 }>
        {
            isSignup && (
                <React.Fragment >
                <Input name = "firstName"
                label = "First Name"
                handleChange = { handleChange }
                autoFocus half / >
                <Input name = "lastName"
                label = "Last Name"
                handleChange = { handleChange }
                half />
                </React.Fragment>
            )
        } <Input name = "email"
        label = "Email Address"
        handleChange = { handleChange }
        type = "email" / >
        <Input name = "password"
        label = "Password"
        handleChange = { handleChange }
        type = { showPassword ? "text" : "password" }
        handleShowPassword = { handleShowPassword }/>
        { isSignup && <Input name = "confirmPassword"
            label = "Repeat Password"
            handleChange = { handleChange }
            type = "password" />
        }
        </Grid>
        <Button type = "submit"
        fullWidth variant = "contained"
        color = "primary"
        className = { classes.submit } > { isSignup ? 'Sign Up' : 'Sign In' } </Button>
        <Divider classes = {
            { root: classes.divider } }
        variant = "middle" / >
        <Button
        fullWidth variant = "contained"
        color = "secondary"
        className = { classes.submit }
        ><FacebookIcon /> Login with Facebook </Button>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        <Divider classes = {
            { root: classes.divider } }
        variant = "middle" / >
        <Grid container justify = "center" >
        <Grid item > {
            isSignup ?
            <Button onClick = { switchMode }
            style = {
                { padding: "0px", marginTop: "10px" } } >
            <Paper elevation = { 6 }
            component = "h3"
            className = { classes.switchMode } > Sign In! </Paper>
            </Button> :
                <Button onClick = { switchMode }
            style = {
                { padding: "0px", marginTop: "10px" } } >
            <Paper elevation = { 6 }
            component = "h3"
            className = { classes.switchMode } > Sign Up! </Paper>
            </Button>
        } </Grid>
        </Grid>
        </form>
        </Paper>
        </Container>
    )
}

export default Auth