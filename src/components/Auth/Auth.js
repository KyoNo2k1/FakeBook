import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, Divider } from '@material-ui/core'
// import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import useStyles from './styles'
import Input from './Input';
import fakebookImg from '../../images/fakebook.png'
import { signup, login } from '../redux/reducerSlice/userSlice.js'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Auth({ setUser }) {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate();

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
            }, 2000)
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

    // const googleSuccess = async (res) => {

    //     const result = res?.profileObj
    //     const token = res?.tokenId
    //     const action = {
    //         type: 'AUTH',
    //         data: {
    //             result,
    //             token
    //         }
    //     }
    //     try {
    //         dispatch(action)

    //         navigate('/');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const googleError = (err) => {
    //     console.log(err);
    //     console.log("Google sign in was failed");
    // }
    // <GoogleLogin
    //     clientId="535515150425-g8e6roevol7l5mmqbugi2pc8nocunraf.apps.googleusercontent.com"
    //     render={(renderProps) => (
    //         <Button
    //             className={classes.googleButton}
    //             color="primary"
    //             fullWidth
    //             onClick={renderProps.onClick}
    //             disabled={renderProps.disabled}
    //             startIcon={<Icon />}
    //             variant="contained"
    //         >
    //             Google Sign In
    //         </Button>
    //     )}
    //     onSuccess={googleSuccess}
    //     onFailure={googleError}
    //     cookiePolicy="single_host_origin"
    // />
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