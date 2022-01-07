import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase  from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import {Typography, Avatar } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';

import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { AiOutlineArrowDown } from "react-icons/ai";
import {  CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";

import userImg from '../../images/avatar.png'
import useStyles from './styles';

const middleIcon = ['fas fa-home', 'fab fa-youtube', 'fas fa-users', 'fas fa-dice-d6']
const middleIconLink = ['/home', '/watch', '/group', '/game']


export default function Navbar({user}) {
  const classes = useStyles();
  const [leftLine, setleftLine] = useState(528)
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    if(user){
      resetAvtive()
      setleftLine(528+activeIcon*116)

      document.getElementById("boxIcon").children[activeIcon].children[0].style.color = "#94c2ff"
    }
  },[activeIcon])


  const Line = () => <div style={{left: leftLine + 'px'}} className={classes.line}></div>

  const resetAvtive = () => {
    document.getElementById("boxIcon").children[0].children[0].style.color = "white"
    document.getElementById("boxIcon").children[1].children[0].style.color = "white"
    document.getElementById("boxIcon").children[2].children[0].style.color = "white"
    document.getElementById("boxIcon").children[3].children[0].style.color = "white"
  }

  if(user)
  return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar className={classes.toolbarNav}>
            <Box className={classes.leftLocation}>
              <Link to="/">
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <svg color="inherit" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#4eff22"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#ff2aee" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                </IconButton>
              </Link>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…....."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Box>

            <Box className={classes.middleLocation} id="boxIcon">
            {
              middleIcon.map((className,index) => (
                  <Link to={middleIconLink[index]}>
                    <div className={classes.middleIcon} key={index} onClick={() => setActiveIcon(index)}>
                      <i className={className} style={{fontSize:"2rem", width: "36px"}}></i>
                    </div>
                  </Link>
                  ))
                }
              <Line />
            </Box>

            <Box className={classes.rightLocation}>
              <div className={classes.profile}>
                <Avatar alt="Nghia" src={userImg} className={classes.small} />
                <Typography className={classes.userName} variant="h6">Nghia</Typography>
              </div>
              <div className={classes.rightLocationIcon}>
                <Icon>
                  <CgMenuGridO className={classes.rightLocationIconCss} />
                </Icon>
                <Icon>
                  <RiMessengerFill className={classes.rightLocationIconCss} />
                </Icon>
                <Icon style={{position: 'relative',}}>
                  <MdOutlineNotifications className={classes.rightLocationIconCss} />
                  <div className={classes.notiCount}>
                    <span style={{position: 'absolute',top: -1, left: 6, fontSize: '1rem'}}>
                      1
                    </span>
                  </div>
                </Icon>
                <Icon style={{position: 'relative',}}>
                  <AiOutlineArrowDown className={classes.rightLocationIconCss} />
                  <div className={classes.notiCount}>
                    <span style={{position: 'absolute',top: -1, left: 6, fontSize: '1rem'}}>
                      1
                    </span>
                  </div>
                </Icon>
              </div>
            </Box>
          </Toolbar>
          </AppBar>
      </div>
  )
  else return null
}