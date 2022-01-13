import { alpha, makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1
    },
    menuButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: "0 12px",
    },
    search: {
      position: 'relative',
      borderRadius: '20px',
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: '0 !important',
      height: '36px',
      alignItems: 'center'
    },
    toolbarNav:{
      width: "100%",
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between'
    },
    leftLocation:{
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        padding: '5px 15px 5px 5px',
        marginBottom: '3px',
        height: '50%',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: '#afbbff',
        },
        [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: 20,
        justifyContent: 'center',
        },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '1em',
        paddingLeft: '7px',
        zIndex: 1,
        fontWeight: 'bold'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    middleLocation:{
      width: '1519.2px',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
    },
    middleIcon: {
      padding: '12px 40px',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#afbbff',
      },
      borderRadius: '10px 10px 0 0px',
      position: 'relative',
    },
    rightLocation: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
    },
    rightLocationIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1, 1, 1, 0),
    },
    rightLocationIconCss: {
      padding: theme.spacing(1.2),
      cursor: 'pointer',
      borderRadius: '45px',
      backgroundColor: '#6b82ff',
      margin: '0 3px',
      '&:hover': {
        backgroundColor: '#afbbff',
      },
      '&:active': {
        backgroundColor: '#94c2ff',
        opacity: "0.5"
      },
    },
    notiCount: {
      position: 'absolute',
      top: -25,
      left: 32,
      width: 20,
      height: 20,
      backgroundColor: 'red',
      fontSize: '1.2rem',
      textAlign: 'center',
      borderRadius: '45%',
    },
    line: {
      height: "5px",
      width: "116px",
      position: "absolute",
      backgroundColor: "#94c2ff",
      bottom: 0,
    },
    listMenu: {
      background: '#3f51b5',
    },
    divider: {
      background: '#f50057',
    },
    rightIconClick: {
      position: 'relative',

    }
  }));